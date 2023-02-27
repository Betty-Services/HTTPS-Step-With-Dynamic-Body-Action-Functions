import exampleFunction from '../functions/example-function/1.0';
describe('Example Test', () => {
  const exampleInput = {
    example: true,
  };

  test('Run example function with expected outcome', async () => {
    const { as } = await exampleFunction({ input: exampleInput });
    expect(as).not.toBeNull();
    expect(as).toEqual(exampleInput);
  });

  test('Run example function to failure', async () => {
    await expect(exampleFunction({ input: undefined })).rejects.toThrow();
  });
});
