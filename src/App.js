// import { Component } from "react";
// import LoginForm from "./Components/LoginForm";
// import SignUpForm from "./Components/SignUpForm";
// import { ValueIndicator } from "./Components/ValueIndicator";
// import { Container } from "./Components/Container";
// import { ErrorBoundary } from "./Components/ErrorBoundary";

import { Component } from "react";
import ArticleList from "./Components/ArticlesList";
import axios from "axios";
import ContentLoader from "react-content-loader";
import {
  consoleLogAbba,
  fetchArticlesWithQuery,
} from "./Components/utils/getArticles";

// if I import like this, later all functions from this can be named api.function without destructuring
// import * as api from "./Components/utils/getArticles";

// function App() {
//   return (
//     <>
//       {/* <LoginForm onSubmit={(values) => console.log(values)} /> */}
//       {/* <SignUpForm onSubmit={(values) => console.log(values)} /> */}
//       {/* <Container /> */}
//       {/* <ErrorBoundary /> */}
//     </>
//   );
// }

// Good address:
axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
// Error check address:
// axios.defaults.baseURL = "https://hn.algodasdasdaslia.com/api/v1";

// Lets change function App on class App
class App extends Component {
  state = {
    articles: [],
    // query: "/search?query=react",
    // now in ArticlesList:
    query: "react",
    isLoading: false,
    isError: false,
    // isError: true,
    // this upper with this below is better, becouse sometimes error is '' so this upper tell me it is true, so it have error. But if I use both, I need to remember about two identifiers
    error: "",
  };

  async componentDidMount() {
    // if response is empty
    // if (this.state.query === "") return;

    // Or I can give other response, if empty, for example from backend:
    // if (this.state.query === "") {
    //   const response = await axios.get("/search?query=mostAwesomeProducts");
    //   this.setState(...)
    // }

    this.setState({
      isLoading: true,
    });

    await this.getInitialData();

    // await setTimeout(async () => {

    // axios is asynchronic, so I must use async await
    // const response = await axios.get(this.state.query);
    // this.setState({
    //   // articles: response,
    //   articles: response.data.hits,
    //   isLoading: false,
    // });

    // }, 10000);
  }

  getInitialData = async () => {
    // const response = await axios.get(this.state.query);

    // const response = await axios.get(this.state.query).catch().finally();

    consoleLogAbba();

    try {
      // const response = await axios.get(this.state.query);
      const articles = await fetchArticlesWithQuery(this.state.query);

      // this.setState({ articles: articles });
      this.setState({ articles });

      console.log("Try state");
    } catch (error) {
      console.log("Error state");

      // this.setState({ error: error });
      // or
      this.setState({ error });
    } finally {
      console.log("Finally state");
      this.setState({ isLoading: false });
    }

    // this.setState({
    //   // articles: response,
    //   articles: response.data.hits,
    //   isLoading: false,
    // });
  };

  // It's the best way to non rerendering every time function, but not always we can do it.
  // getInitialData = () => { ... }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <>
        {/* The best way to make function here is by reference like this, becouse it wont rerender every time */}
        {/* <div onClick={this.getInitialData}></div> */}

        {/* Second best way is anonyme function: */}
        {/* <div
          onClick={(e) => this.getInitialData(e, exampleAdditionalProps)}
        ></div> */}

        {/* Third way is inline function, but it's better only when it's not so much in it, like maximum one thing */}
        {/* <div
          onClick={() => {
            isReady = true;
          }}
        ></div> */}

        {/* {articles.length > 0 ? (
          <ArticleList articles={articles} />
        ) : (
          <div>Pusto</div>
        )} */}

        {/* {isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />} */}

        {/* {isLoading ? <ContentLoader /> : <ArticleList articles={articles} />} */}

        {/* instead of this two lines upper I can do: */}
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <ContentLoader />}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </>
    );
  }
}

export default App;
