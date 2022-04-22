const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "4070edb1a24c194ec367ed535d03f019",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
