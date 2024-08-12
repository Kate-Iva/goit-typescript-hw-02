import { ImagesType } from '../App/App.types';

export interface ImageCardProps {
  imageItem: ImagesType;
  modalOpened: () => void;
  setDataImage: (image: ImagesType) => void;
}