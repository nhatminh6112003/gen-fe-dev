import { NextRequest, NextResponse } from 'next/server';
import { parse, serialize } from 'cookie';

async function fetchAvailableLanguages(): Promise<string[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/languages`);
  const data = await response.json();
  return (
    data?.data?.map((lang: any) =>
      lang?.attributes?.shortKeyLang.toLowerCase()
    ) || []
  );
}

async function getLanguageByIP(): Promise<string | undefined> {
  const response = await fetch(`/api/getLangByIP`);
  const data = await response.json();
  return data?.language;
}

export async function middleware(
  request: NextRequest
): Promise<NextResponse | void> {
  const cookies = request.headers.get('cookie')
    ? parse(request.headers.get('cookie') as string)
    : {};

  let locale: string | undefined = cookies?.language;

  if (!locale) {
    // const availableLanguages = await fetchAvailableLanguages();
    // const detectedLanguage = await getLanguageByIP();

    locale = 'en';
    const newCookie = serialize('language', locale, {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    });

    const response = new NextResponse();
    response.headers.set('Set-Cookie', newCookie);
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/:locale*'
};
