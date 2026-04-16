export interface ZennPost {
  title: string;
  url: string;
  pubDate: Date;
}

export async function fetchZennFeed(): Promise<ZennPost[]> {
  const res = await fetch('https://zenn.dev/misumith/feed');
  if (!res.ok) return [];

  const xml = await res.text();
  const posts: ZennPost[] = [];

  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1]!;

    const titleMatch =
      item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ??
      item.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
    const dateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);

    const title = titleMatch?.[1]?.trim() ?? '';
    const url = linkMatch?.[1]?.trim() ?? '';
    const pubDate = dateMatch ? new Date(dateMatch[1]!.trim()) : new Date(0);

    if (title && url) {
      posts.push({ title, url, pubDate });
    }
  }

  return posts;
}
