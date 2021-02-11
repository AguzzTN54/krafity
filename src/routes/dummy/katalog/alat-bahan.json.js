import products from './_products';

const pengrajinProducts = products.filter(({ type }) => type !== 'product');

const contents = (query) => {
  const { category } = query;
  if (!category) return JSON.stringify(pengrajinProducts);
  const categorylist = category.split(',');
  // prettier-ignore
  const data = pengrajinProducts.filter((v) => categorylist.includes(v.category.slug));
  return JSON.stringify(data);
};

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents(req.query));
}
