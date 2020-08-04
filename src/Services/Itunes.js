const URL = "https://itunes.apple.com/";

export default {
  searchAlbum: async (query) => {
    try {
      const response = await fetch(
        `${URL}search?term=${query.term}&entity=${"album"}&limit=${50}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("There was an error when fetching from itunes.");
    }
  },
};
