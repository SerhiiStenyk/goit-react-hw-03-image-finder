import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import pictureApi from '../services/pictureApi';
import Loader from './Loader/Loader';
import s from './App.module.css';

class App extends Component {
  state = {
    pictures: [],
    query: '',
    page: 1,
    loading: false,
    error: null,
  };
  searchPictures = pictureName => {
    this.setState({ query: pictureName, pictures: [], page: 1 });
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, pictures } = this.state;

    if (prevState.query !== query) {
      this.fetchPictures();
    }
    if (
      prevState.pictures.length < pictures.length &&
      prevState.pictures.length !== 0
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  fetchPictures = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    pictureApi
      .fetchPictures(query, page)
      .then(pictures =>
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    const { pictures, loading } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.searchPictures} />
        {pictures.length > 0 && <ImageGallery pictures={pictures} />}
        {pictures.length > 0 && (
          <Button onClick={this.fetchPictures} title="Load More" />
        )}
        {loading && <Loader />}
      </div>
    );
  }
}

export default App;
