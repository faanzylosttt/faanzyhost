import { put } from '@vercel/blob';

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const filename = req.query.filename || 'untitled';
  const blob = await put(filename, req, { access:'public', addRandomSuffix:true });
  res.json(blob);
};

export const config = { api:{ bodyParser:false } };
