export const getPathname = (pathname: string | any) => {
  const newPathname = pathname?.length > 3 ? pathname?.substring(3) : '/';
  return newPathname;
};
