import videos from './_videos';

const contents = JSON.stringify(videos);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
