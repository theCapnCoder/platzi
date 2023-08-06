export const shuffle = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

export const buildUrl = (url: string, params: any) => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], i) => {
    const sign = i === 0 ? '?' : '&';
    urlWithParams += `${sign}${key}=${value}`;
    
  })

  return urlWithParams;
}