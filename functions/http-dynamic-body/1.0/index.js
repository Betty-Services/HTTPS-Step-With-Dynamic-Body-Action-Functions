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

const httpDynamicBody = async ({
  url,
  method,
  headers = [],
  protocol,
  queryParameters = [],
  body = null,
}) => {
  const fetchUrl = generateUrl(url, protocol, queryParameters);
  const options = {
    method,
    headers: parseHeaders(headers),
    body: method !== 'get' && body !== null ? body : undefined,
  };

  const response = await fetch(fetchUrl, options);

  return {
    as: await response.text(),
  };
};

export default httpDynamicBody;
