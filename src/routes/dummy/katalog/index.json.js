import products from './_products';

const contents = (query) => {
  const { category } = query;
  if (!category) return JSON.stringify(products);
  const categorylist = category.split(',');
  const data = products.filter((v) => categorylist.includes(v.category.slug));
  return JSON.stringify(data);
};

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents(req.query));
}
