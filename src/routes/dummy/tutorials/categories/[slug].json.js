import tutorials from '../_tutorials';

const contents = (slug) => tutorials
  .filter(({ category }) => category.slug === slug);

export function get(req, res) {
  const { slug } = req.params;

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(contents(slug)));
}
