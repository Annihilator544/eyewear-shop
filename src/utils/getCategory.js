const getCategory = (string) => {
  let type;

  if (string === 'sunnies') type = 'sunclothes';
  if (string === 'clothes') type = 'eyeclothes';

  return type;
};

export default getCategory;
