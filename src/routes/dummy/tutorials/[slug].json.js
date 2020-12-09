import tutorials from './_tutorials';

const lookup = new Map();
tutorials.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
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

    res.end(JSON.stringify({
      message: 'Not found',
    }));
  }
}
