import axios from 'axios';

export interface CafeResponse<T> {
  status: number;
  code: string;
  successMessage: string;
  responseObject: T;
}
export const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://coffee-api.snaps.com',
  },
});

axiosClient.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    config.headers['Access-Authorization'] = null;
    return config;
  }
  config.headers['Access-Authorization'] = `Bearer ${accessToken}`;
  return config;
});

axiosClient.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    const { config, response } = error;

    console.log('res intercept', response, config);
    if (response.status === 401) {
      console.log('expired');
      let res = await axios.post('https://coffee-api.snaps.com/v1/auth/retrieve-token');
      console.log('retrieve-token', res.data);
    }
  }
);
