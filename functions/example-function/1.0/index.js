const exampleFunction = async ({ input }) => {
  if (typeof input !== 'object') throw new Error('Expected an Object as input');

  return {
    as: input,
  };
};

export default exampleFunction;
