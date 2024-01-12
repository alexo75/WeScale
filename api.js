import axios from "axios";
import { RIOT_API_KEY } from "@env";

const fetchSummonerDataByPuuid = async (puuid) => {
  const region = "na1";
  const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${encodeURIComponent(
    puuid
  )}`;
  try {
    const response = await axios.get(url, {
      headers: { "X-Riot-Token": RIOT_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching summoner data:", error);
    return null;
  }
};

// fetch summoner data (by name)
const fetchSummonerData = async (name, region) => {
  const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(name)}`;
  try {
    const response = await axios.get(url, {
      headers: { "X-Riot-Token": RIOT_API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching summoner data:", error);
    return null;
  }
};


const fetchLastGameStatsForSummoner = async (puuid) => {
  const matchListUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`;
  try {
    const matchListResponse = await axios.get(matchListUrl, {
      headers: { "X-Riot-Token": RIOT_API_KEY },
    });
    if (matchListResponse.data.length === 0) return null;

    const lastMatchId = matchListResponse.data[0];
    const matchDetailsUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/${lastMatchId}`;
    const matchDetailsResponse = await axios.get(matchDetailsUrl, {
      headers: { "X-Riot-Token": RIOT_API_KEY },
    });

    return matchDetailsResponse.data;
  } catch (error) {
    console.error("Error fetching last game stats:", error);
    return null;
  }
};

const fetchChampionData = async () => {
  const url = `${API_BASE_URL}/data/en_US/champion.json`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching champion data:", error);
    return null;
  }
};

const API_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/13.24.1";

export {
  fetchSummonerDataByPuuid,
  fetchSummonerData,
  fetchLastGameStatsForSummoner,
  fetchChampionData,
  API_BASE_URL,
};
