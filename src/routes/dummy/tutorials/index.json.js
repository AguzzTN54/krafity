import tutorials from './_tutorials';

// const contents = JSON.stringify(
//   tutorials.map((post) => {
//     const {
//       category, content, slug, thumbnail, title, user,
//     } = post;

//     return {
//       title,
//       slug,
//       category,
//       user,
//       thumbnail,
//       content,
//     };
//   }),
// );

const contents = JSON.stringify(tutorials);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
