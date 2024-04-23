import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org`;

export const getTrandingMovies = async () => {
  const url = "/3/trending/movie/day";
  const options = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU`,
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const url = `/3/movie/${movieId}`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTkzMjVhOTAzZGMyMmM5ZDI0ZGUxMjRiZDRlYzJjNyIsInN1YiI6IjY2MjdhMWIzNjNlNmZiMDE3ZWZkY2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-KuWUIz479j2eqEG3Tx_TXqkv-_QOpTnYYL_IzpEhU",
    },
  };

  const response = await axios.get(url, options);
  console.log(response.data);
  return response.data;
};
