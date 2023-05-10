import { axiosClient, ServerResponse } from '@/apis';
import { ISignInForm } from '@/pages/user/signin';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type SignIn = {};

const useSignInMutation = () => {
  const signup = async (param: ISignInForm) => {
    const response = await axiosClient.post<ServerResponse<SignIn>>('/v1/auth/login', {
      ...param,
    });
    return response;
  };

  return useMutation({
    mutationFn: (form: ISignInForm) => signup(form),
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
    onSuccess: res => {
      let bearerToken = `${res.headers['access-authorization']}`;
      let accessToken = bearerToken.split(' ')[1];
      localStorage.setItem('access_token', accessToken);
    },
  });
};

export default useSignInMutation;
