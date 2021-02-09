import products from './_products';

const titles = [];
const slugs = [];
products.forEach(({ category }) => {
  const { slug, title } = category;
  if (!slugs.includes(slug)) {
    slugs.push(slug);
    titles.push(title);
  }
});

const dataCategory = slugs.map((v, i) => ({
  title: titles[i],
  slug: v,
}));
const contents = JSON.stringify(dataCategory);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
