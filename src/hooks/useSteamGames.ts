import { useEffect, useState } from 'react';

export interface SteamGame {
  id: number;
  name: string;
  image: string;
  url: string;
}

interface UseSteamGamesResult {
  games: SteamGame[];
  loading: boolean;
  error: string | null;
}

function isSteamGame(value: unknown): value is SteamGame {
  if (typeof value !== 'object' || value === null) return false;

  const game = value as Record<string, unknown>;
  return (
    typeof game.id === 'number' &&
    typeof game.name === 'string' &&
    typeof game.image === 'string' &&
    typeof game.url === 'string'
  );
}

export function useSteamGames(): UseSteamGamesResult {
  const [games, setGames] = useState<SteamGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGames() {
      try {
        const response = await fetch('/api/steam-games', { signal: controller.signal });
        const result: unknown = await response.json();

        if (!response.ok) {
          const message =
            typeof result === 'object' &&
            result !== null &&
            'error' in result &&
            typeof result.error === 'string'
              ? result.error
              : `Falha ao buscar jogos da Steam (${response.status}).`;
          throw new Error(message);
        }

        if (!Array.isArray(result) || !result.every(isSteamGame)) {
          throw new Error('A resposta da API da Steam tem um formato inválido.');
        }

        setGames(result);
      } catch (caughtError) {
        if (controller.signal.aborted) return;

        setError(
          caughtError instanceof Error
            ? caughtError.message
            : 'Não foi possível buscar os jogos da Steam.',
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void fetchGames();
    return () => controller.abort();
  }, []);

  return { games, loading, error };
}
