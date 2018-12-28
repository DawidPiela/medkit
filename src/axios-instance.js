import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://medkit-react-app.firebaseio.com/'
})

export default instance;