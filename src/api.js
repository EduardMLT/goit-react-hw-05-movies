import axios from 'axios';

axios.defaults.baseURL = 'https://www.themoviedb.org/settings/api';
const API_KEY = '88fdc914baee9577764d2a46e8bb977b';

export const fetchImages = async (searchQuery, page, per_page) => {
  try {
    const response = await axios.get(
      `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};


//  *************************

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGZkYzkxNGJhZWU5NTc3NzY0ZDJhNDZlOGJiOTc3YiIsInN1YiI6IjY1MTk2MzUzMDcyMTY2MDBhY2I0OTIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTmYEfJhE7esJ6K6IC1ENcdkdGEBCeg9sV-ADIOnJME'
//   }
// };

// fetch('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGZkYzkxNGJhZWU5NTc3NzY0ZDJhNDZlOGJiOTc3YiIsInN1YiI6IjY1MTk2MzUzMDcyMTY2MDBhY2I0OTIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTmYEfJhE7esJ6K6IC1ENcdkdGEBCeg9sV-ADIOnJME',
  },
};

fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));