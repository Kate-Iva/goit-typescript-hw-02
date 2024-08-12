import React from 'react';
import classes from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  modalOpened,
  setDataImage,
}) => {
  return (
    <ul className={classes.imageGallery}>
      {images.map((imageItem) => (
        <li key={imageItem.id} className={classes.galleryItem}>
          <ImageCard
            imageItem={imageItem}
            modalOpened={modalOpened}
            setDataImage={setDataImage}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;