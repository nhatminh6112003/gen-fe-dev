// pages/api/getLangByIP.ts
import { NextApiRequest, NextApiResponse } from 'next';
import geoip from 'geoip-lite';
import * as countryCodes from 'country-codes-list';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userIp: string | undefined =
    (req.headers['x-forwarded-for'] as string | undefined) ||
    req.connection.remoteAddress;
  if (!userIp) {
    return res.status(400).json({ error: 'Cannot detect IP' });
  }

  const geos = geoip.lookup(userIp);
  if (geos && geos.country) {
    const myCountryCodesObject = countryCodes.findOne(
      'countryCode' as countryCodes.CountryProperty,
      geos.country
    );

    const detectedLanguage =
      myCountryCodesObject?.officialLanguageCode?.toLowerCase();
    return res.status(200).json({ language: detectedLanguage });
  }

  return res.status(404).json({ error: 'Language not found for given IP' });
}
