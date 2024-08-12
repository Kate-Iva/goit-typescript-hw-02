import React from 'react';
import classes from './ImageModal.module.css';
import ReactModal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  dataImage,
  toggleModalOpen,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModalOpen}
      overlayClassName={classes.overlay}
      className={classes.imageModal}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <img src={dataImage?.urls?.regular} alt={dataImage?.alt_description} />
    </ReactModal>
  );
};

export default ImageModal;