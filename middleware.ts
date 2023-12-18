import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'cookie';
async function fetchAvailableLanguages(): Promise<string[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/languages`);
  const data = await response.json();
  return (
    data?.data?.map((lang: any) =>
      lang?.attributes?.shortKeyLang.toLowerCase()
    ) || []
  );
}
function getProtocol() {
  const isProd = process.env.MODE === 'production';
  if (isProd) return 'https://';
  return 'http://';
}

export async function middleware(
  request: NextRequest
): Promise<NextResponse | void> {
  const res = NextResponse.next();
  const cookies = request.headers.get('cookie')
    ? parse(request.headers.get('cookie') as string)
    : {};
  const host = request.headers.get('host');
  const protocol = getProtocol();
  let locale: string | undefined = cookies?.language;
  if (!locale) {
    const defaultLanguage = 'en';
    locale = defaultLanguage;
    const availableLanguages = await fetchAvailableLanguages();
    const response = await (
      await fetch(`${protocol}${host}/api/getLangByIP`)
    ).json();
    const detectedLanguage: string | undefined = response?.language;

    if (detectedLanguage && availableLanguages.includes(detectedLanguage)) {
      locale = detectedLanguage;
    }
    res.cookies.set('language', locale);
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  return res;
}

export const config = {
  matcher: '/:locale*'
};
