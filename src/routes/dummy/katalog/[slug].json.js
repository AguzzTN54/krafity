import products from './_products';

const lookup = new Map();
products.forEach((product) => {
  lookup.set(product.slug, JSON.stringify(product));
});

export function get(req, res) {
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(
      JSON.stringify({
        message: 'Not found',
      }),
    );
  }
}
