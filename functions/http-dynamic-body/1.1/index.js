const parseHeaders = (headers) =>
  headers.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});

const parseQueryParameters = (queryParameters) =>
  queryParameters
    .map(({ key, value }, index) => {
      const paramKey = index === 0 ? `?${key}` : key;
      return `${paramKey}=${encodeURIComponent(value)}`;
    })
    .join('&');

const generateUrl = (url, protocol, queryParameters) =>
  `${protocol}://${url}${parseQueryParameters(queryParameters)}`;

const httpText = async ({
  url,
  method,
  headers = [],
  protocol,
  queryParameters = [],
  body = '',
}) => {
  const fetchUrl = generateUrl(url, protocol, queryParameters);
  const options = {
    method,
    headers: parseHeaders(headers),
    body: method !== 'get' && body !== '' ? body : undefined,
  };

  const response = await fetch(fetchUrl, options);
  const text = await response.text();
  return {
    as: text,
  };
};

export default httpText;
