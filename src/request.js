const apiKey = "40547ebdf27521dd9277b53456475de7";
const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
  fetchToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
  fechNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
};
export default requests;
