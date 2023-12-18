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
export async function middleware(
  request: NextRequest
): Promise<NextResponse | void> {
  const res = NextResponse.next();
  const cookies = request.headers.get('cookie')
    ? parse(request.headers.get('cookie') as string)
    : {};

  let locale: string | undefined = cookies?.language;
  let ip = request.ip ?? request.headers.get('x-real-ip');
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(',').at(0) ?? 'Unknown';
  }
  if (!locale) {
    const defaultLanguage = 'en';
    locale = defaultLanguage;
    if (ip) {
      const availableLanguages = await fetchAvailableLanguages();
      const response = await (
        await fetch(`https://ipinfo.io/${ip}?token=e71a711525bcb3`)
      ).json();
      const detectedLanguage: string = response?.country.toLowerCase();

      if (availableLanguages.includes(detectedLanguage)) {
        locale = detectedLanguage;
      }
      res.cookies.set('language', locale);
    }
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  return res;
}

export const config = {
  matcher: '/:locale*'
};