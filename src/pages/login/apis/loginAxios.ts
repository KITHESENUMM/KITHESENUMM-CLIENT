import { axios } from '@utils/apis';

export const loginAxios = (authorizationCode: string) => {
  console.log('🚀 login post 쐈어용 ~ ');
  return axios.post(
    '/v1/auth/login',
    {
      redirectUri: import.meta.env.VITE_APP_GOOGLE_AUTH_REDIRECT_URI,
      socialType: 'GOOGLE',
    },
    {
      params: {
        authorizationCode,
      },
    },
  );
};
