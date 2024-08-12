import axios from 'axios';
import { ImagesType } from '../components/App/App.types';

const ACCESS_KEY = '2DkkAoapHlYqHjLfrFvOrklAHcy8xF_d8gLgL0_PTfQ';
const BASE_URL = 'https://api.unsplash.com/search/photos';

interface ApiResponse {
  results: ImagesType[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  searchValue: string = '',
  page: number = 1
): Promise<ApiResponse> => {
  try {
    const { data } = await axios.get<ApiResponse>(BASE_URL, {
      params: {
        client_id: ACCESS_KEY,
        page: page,
        query: searchValue,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Error fetching images');
  }
};