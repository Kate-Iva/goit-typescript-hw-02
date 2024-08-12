import { ImagesType } from "../App/App.types";

export interface ImageModalProps {
  isOpen: boolean;
  dataImage: ImagesType | null;
  toggleModalOpen: () => void;
}