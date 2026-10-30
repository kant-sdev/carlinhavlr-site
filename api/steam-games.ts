import { steamAppIds } from '../src/config';

interface ApiRequest {
  method?: string;
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(body: unknown): void;
}

interface SteamGameDetails {
  steam_appid: number;
  name: string;
  header_image: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isSteamGameDetails(value: unknown): value is SteamGameDetails {
  if (!isRecord(value)) return false;

  return (
    typeof value.steam_appid === 'number' &&
    typeof value.name === 'string' &&
    typeof value.header_image === 'string'
  );
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Método não permitido.' });
    return;
  }

  try {
    const response = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${steamAppIds.join(',')}&l=portuguese&cc=BR`,
    );

    if (!response.ok) {
      res.status(500).json({ error: 'A Steam não conseguiu responder à solicitação.' });
      return;
    }

    const result: unknown = await response.json();
    if (!isRecord(result)) {
      res.status(500).json({ error: 'A Steam retornou uma resposta inválida.' });
      return;
    }

    const games = steamAppIds.map((appId) => {
      const appDetails = result[String(appId)];
      const data =
        isRecord(appDetails) && appDetails.success === true ? appDetails.data : undefined;

      if (!isSteamGameDetails(data) || data.steam_appid !== appId) {
        return null;
      }

      return {
        id: data.steam_appid,
        name: data.name,
        image: data.header_image,
        url: `https://store.steampowered.com/app/${data.steam_appid}`,
      };
    });

    if (games.some((game) => game === null)) {
      res.status(500).json({ error: 'A Steam retornou dados incompletos para os jogos.' });
      return;
    }

    res.status(200).json(games);
  } catch {
    res.status(500).json({ error: 'Não foi possível conectar à API da Steam.' });
  }
}
