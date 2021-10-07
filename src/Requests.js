const Api_key = "dc4f877ebb5259696a892855c9bebde7";

const Requests = {

    fetchNetflixOriginals: `/discover/movie?api_key=${Api_key}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
    fetchTrendingMovies: `https://api.themoviedb.org/3/trending/all/day?api_key=${Api_key}`,
}
export default Requests;

