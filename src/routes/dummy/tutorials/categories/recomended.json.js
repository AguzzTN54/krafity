const kategori = [
  {
    title: 'Souvenir',
    slug: 'souvenir',
    thumbnail: '/assets/images/souvenir.jpg',
  },
  {
    title: 'Barang Pakai',
    slug: 'useful-things',
    thumbnail: '/assets/images/useful-things.jpg',
  },
  {
    title: 'Dekorasi',
    slug: 'decoration',
    thumbnail: '/assets/images/decoration.webp',
  },
  {
    title: 'Mainan',
    slug: 'toys',
    thumbnail: '/assets/images/toys.webp',
  },
];

const contents = JSON.stringify(kategori);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
