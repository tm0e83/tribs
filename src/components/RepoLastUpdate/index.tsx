import { useState, useEffect } from 'react';

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 Stunde

type CacheEntry = {
  date: string;
  timestamp: number;
};

type RepoLastUpdateProps = {
  owner: string;
  repo: string;
  className?: string;
};

const RepoLastUpdate: React.FC<RepoLastUpdateProps> = ({ owner, repo, className }) => {
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);

  useEffect(() => {
    const cacheKey = `repo_last_update_${owner}_${repo}`;

    const fetchData = async () => {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const entry: CacheEntry = JSON.parse(cached);
          if (Date.now() - entry.timestamp < CACHE_TTL_MS) {
            setLastUpdate(entry.date);
            return;
          }
        }

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

        if (!response.ok) return;

        const data = await response.json();

        const date = new Date(data.pushed_at).toLocaleDateString('de-DE', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        localStorage.setItem(cacheKey, JSON.stringify({ date, timestamp: Date.now() } satisfies CacheEntry));
        setLastUpdate(date);
      } catch {
        // kein Datum verfügbar
      }
    };

    fetchData();
  }, [owner, repo]);

  if (!lastUpdate) return null;

  return (
    <span className={className}>{lastUpdate}</span>
  );
};

export default RepoLastUpdate;