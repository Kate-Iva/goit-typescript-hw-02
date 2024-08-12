import './App.css';
import { fetchImages } from '../../fetch';
import { scrolledImages } from '../../utils';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { ImagesType } from './App.types';

const App = () => {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [images, setImages] = useState<ImagesType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataImage, setDataImage] = useState<ImagesType | null>(null);

  const setImagesArray = (imagesArray: ImagesType[], page: number) => {
    setImages((prevImages) =>
      page > 1 ? [...prevImages, ...imagesArray] : imagesArray
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        if (page === 1) setImages([]);

        setLoading(true);
        const imagesData = await fetchImages(searchValue, page);
        const { results, total_pages } = imagesData;
        setImagesArray(results, page);

        setTotalPages(total_pages);

        if (page > 1) {
          scrolledImages();
        }
      } catch (error) {
        setError(true);
        setSearchValue('');
      } finally {
        setLoading(false);
      }
    };

    searchValue.length > 0 && fetchData();
  }, [searchValue, page]);

  const pageCounter = (): void => {
    if (totalPages > 0 && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const toggleModalOpen = (): void => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <SearchBar onSearch={setSearchValue} onPageNumber={setPage} />
      {loading && page === 1 && <Loader initial />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          modalOpened={toggleModalOpen}
          setDataImage={setDataImage}
        />
      )}
      {loading && images.length > 1 ? (
        <Loader initial={loading} />
      ) : (
        images.length > 0 &&
        !loading && <LoadMoreBtn pageCounter={pageCounter} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        dataImage={dataImage}
        toggleModalOpen={toggleModalOpen}
      />
    </>
  );
};

export default App;