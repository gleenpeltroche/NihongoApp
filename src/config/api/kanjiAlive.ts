import axios from 'axios';

// export const API_URL = 
//   (STAGE === 'prod')
//    ? PROD_URL
//    : Platform.OS === 'ios'
//       ? API_URL_IOS
//       : API_URL_ANDROID;



const kanjiAliveApi = axios.create({
  baseURL: 'https://kanjialive-api.p.rapidapi.com/api/public',
  headers: {
    'X-RapidAPI-Key': `${process.env.RAPIDAPI_KEY}`,
    'X-RapidAPI-Host': `${process.env.RAPIDAPI_HOST}`
  }
})

// // TODO: Interceptors
// kanjiAliveApi.interceptors.request.use(
//   async (config) => {

//     const token = await StorageAdapter.getItem('token');
//     if ( token )  {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
//   }
// );

export {
    kanjiAliveApi,
}

