import tutorials from '../_tutorials';

const titles = [];
const slugs = [];
tutorials.forEach(({ category }) => {
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
