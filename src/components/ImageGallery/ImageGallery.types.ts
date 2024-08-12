import { ImagesType } from '../App/App.types';

export interface ImageGalleryProps {
  images: ImagesType[];
  modalOpened: () => void;
  setDataImage: (image: ImagesType) => void;
}