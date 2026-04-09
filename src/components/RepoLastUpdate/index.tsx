import { useState, useEffect } from 'react';

type RepoLastUpdateProps = {
  owner: string;
  repo: string;
  className?: string;
};

const RepoLastUpdate: React.FC<RepoLastUpdateProps> = ({ owner, repo, className }) => {
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        
        if (!response.ok) {
          throw new Error('Repository nicht gefunden oder API-Limit erreicht');
        }

        const data = await response.json();
        
        const date = new Date(data.pushed_at).toLocaleDateString('de-DE', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        setLastUpdate(date);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [owner, repo]);

  if (loading) return '';
  if (error) return '';

  return (
    <span className={className}>{lastUpdate}</span>
  );
};

export default RepoLastUpdate;