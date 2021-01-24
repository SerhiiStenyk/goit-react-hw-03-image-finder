import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    largeImg: null,
  };
  openModal = url => {
    this.setState({ largeImg: url });
  };
  closeModal = () => {
    this.setState({ largeImg: null });
  };
  render() {
    const { largeImg } = this.state;
    const { pictures } = this.props;
    return (
      <>
        <ul className={s.list}>
          <ImageGalleryItem pictures={pictures} onClick={this.openModal} />
        </ul>
        {largeImg && <Modal url={largeImg} onClose={this.closeModal} />}
      </>
    );
  }
}

export default ImageGallery;
