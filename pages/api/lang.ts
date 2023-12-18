import geoip from 'geoip-lite';
import * as countryCodes from 'country-codes-list';
import { NextApiRequest, NextApiResponse } from 'next';

export const getDefaultLanguageByIP = async (userIp: string | undefined) => {
  const geos: any = geoip.lookup(userIp as string);
  const fetchLang: any = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/languages`
  );
  const languages = fetchLang.json()?.data;
  const myCountryCodesObject = countryCodes.findOne(
    'countryCode' as countryCodes.CountryProperty,
    geos?.country
  );

  if (
    !languages?.some(
      (lang: any) =>
        lang?.attributes?.shortKeyLang.toLowerCase() ===
        myCountryCodesObject?.officialLanguageCode.toLowerCase()
    ) ||
    !languages?.length ||
    !geos ||
    !myCountryCodesObject
  ) {
    throw new Error(
      `${myCountryCodesObject?.officialLanguageCode} was not configured or Languages count = ${languages?.results?.length}`
    );
  }

  return myCountryCodesObject?.officialLanguageCode;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userIp: any =
    req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (!userIp) {
    throw new Error('Error cannot get client IP');
  }

  try {
    const defaultLanguage = await getDefaultLanguageByIP(userIp);
    res.status(200).json({
      status: 'Success',
      defaultLanguage: defaultLanguage
    });
  } catch (err: any) {
    res.status(400).json({
      status: 'Failed',
      data: { defaultLanguage: 'en' },
      error: `Error internal: ${err.message}`
    });
  }
};

export default handler;
