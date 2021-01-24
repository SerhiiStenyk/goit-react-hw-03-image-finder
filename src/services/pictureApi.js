import axios from 'axios';
const URL =
  'https://pixabay.com/api/?key=19164111-0af009040a9c79092ee7098fb&image_type=photo&orientation=horizontal&per_page=12';
function fetchPictures(query, page = 1) {
  return axios.get(`${URL}&q=${query}&page=${page}`).then(r => r.data.hits);
}
const api = { fetchPictures };

export default api;
