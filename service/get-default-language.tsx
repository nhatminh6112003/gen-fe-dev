export default async function getDefaultLanguage() {
  const response: any = await fetch(`/api/lang`).then((res) => res.json());
  return response?.defaultLanguage;
}
