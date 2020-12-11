import products from './_products';

const pengrajinProducts = products.filter(({ user }) => user.role === 'pengrajin');
const contents = JSON.stringify(pengrajinProducts);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
