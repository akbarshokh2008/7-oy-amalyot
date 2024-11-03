import axios from 'axios';
import { getToken } from './utils/utils';

const http = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse/',
});

http.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('token');

  if (authToken) {
    config.headers.Authorization = `${authToken}`;
  } else {
    getToken();
    const authToken = localStorage.getItem('token');
    config.headers.Authorization = `${authToken}`;
  }

  return config;
});
export default http;

// useEffect(() => {
//   http
//     .get('categories/0JQ5DAqbMKFQ00XGBls6ym/playlists')
//     .then((data) => {
//       // console.log(data.data.playlists.items);
//       setRecent(data.data.playlists.items);
//     })
//     .catch((err) => console.log(err));
// });
