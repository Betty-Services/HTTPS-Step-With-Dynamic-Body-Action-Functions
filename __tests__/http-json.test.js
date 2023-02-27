import httpJson from '../functions/http-json/1.0';
describe('Run HTTP Test', () => {
  test('Run HTTP3 with expected outcome', async () => {
    expect.assertions(1);

    const request = {
      url: 'http://example.com',
      method: 'get',
      body: '',
      headers: [
        { key: 'Content-Type', value: 'application/json; charset=UTF-8' },
      ],
      protocol: 'http',
      queryParameters: [{ key: 'name', value: 'foo' }],
    };

    const { as } = await httpJson(request);

    expect(as).toMatchObject({ key: 'value' });
  });

  test('Will crash when fetch throws errors.', () => {
    expect.assertions(1);

    const request = {
      url: 'http://error.com',
      method: 'get',
      body: '',
      headers: [
        { key: 'Content-Type', value: 'application/json; charset=UTF-8' },
      ],
      protocol: 'http',
      queryParameters: [{ key: 'name', value: 'foo' }],
    };
    httpJson(request).catch(({ message }) => {
      expect(message).toBe('Something went wrong.');
    });
  });
});
