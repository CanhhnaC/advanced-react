import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';
import DataApi from 'state-api';

// import { data } from '../testData.json';
// const api = new DataApi(data);

export default class App extends Component {
  state = {
    articles: {},
    authors: {},
  };
  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleAction={this.articleActions}
      />
    );
  }
}
