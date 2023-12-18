export const formattedData = (obj: any) => {
  return obj?.data?.attributes;
};
export const formattedImageURL = (url: any) => {
  if(url){
    return url
  }
  return "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
};

export function convertTime(timestamp : string) {
  try {
    const datetimeObj = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = datetimeObj.toLocaleDateString('en-US', options);
    return formattedDate;
  } catch (error) {
    console.error('Invalid timestamp format', error);
    return 'Invalid timestamp format';
  }
}