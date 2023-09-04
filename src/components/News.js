import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=123a1d6190dd4796b3115002076fbd9a&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pastData = await data.json();
    this.setState({
      articles: pastData.articles,
      totalResults: pastData.totalResults,
    });
    console.log("TotalResults: " + this.state.totalResults);
  }
  toggleNextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=123a1d6190dd4796b3115002076fbd9a&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let pastData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: pastData.articles,
      loading: false,
    });
  };
  togglePrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=123a1d6190dd4796b3115002076fbd9a&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let pastData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: pastData.articles,
      loading: false,
    });
  };
  render() {
    let { mode } = this.props;
    return (
      <>
        <div className={`container my-5`}>
          <h2
            className={`my-5 text-center text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            Top Headlines
          </h2>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                if (element.url !== null) {
                  return (
                    <div className="col-md-4 my-4" key={element.url}>
                      <NewsItems
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imageUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://media.cnn.com/api/v1/images/stellar/prod/230901083644-hyundai-company-logo-file.jpg?c=16x9&q=w_800,c_fill"
                        }
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        mode={mode}
                      />
                    </div>
                  );
                }
              })}
            ;
          </div>
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            onClick={this.togglePrevPage}
            className={`btn ${
              mode === "light" ? "btn-primary" : "btn-secondary"
            }`}
            type="submit"
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize20)
            }
            onClick={this.toggleNextPage}
            className={`btn ${
              mode === "light" ? "btn-primary" : "btn-secondary"
            }`}
            type="submit"
          >
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
