import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ pictures, onClick }) => {
  return pictures.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className={s.item} onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt={tags} className={s.image} />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
