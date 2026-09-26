import type { Repo } from '../data/site';

// Refresh star counts at build time; silently keep the fallback numbers if the API is unreachable.
export async function withLiveStars(repos: Repo[]): Promise<(Repo & { live: boolean })[]> {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'allanj.github.io-build' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return Promise.all(
    repos.map(async (r) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${r.repo}`, { headers, signal: AbortSignal.timeout(5000) });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as { stargazers_count?: number };
        return typeof data.stargazers_count === 'number' ? { ...r, stars: data.stargazers_count, live: true } : { ...r, live: false };
      } catch {
        return { ...r, live: false };
      }
    }),
  );
}
