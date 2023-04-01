import axios from "axios";

// const URL = `someUrl/a/b/c`;

const fetchArticlesWithQuery = async (searchQuery) => {
  const response = await axios.get(`/search?query=${searchQuery}`);
  //   console.log(response);
  return response.data.hits;
};

const consoleLogAbba = () => {
  console.log("abba");
  somePrivateFunction();
};

const somePrivateFunction = () => {
  console.log(`I'm private, don't export me!`);
};

// It's better export like this, becouse mayby someone will add function, so will just add it below
export { fetchArticlesWithQuery, consoleLogAbba };
