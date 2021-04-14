import axios from 'axios';

const fetchImg = (query, page = 1) => {
   const apiKey = '20439634-6c644a175487626659667f77f';

   return axios
      .get(
         `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(respons => respons.data.hits);
};

export default fetchImg;
