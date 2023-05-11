import { axiosClient, ServerResponse } from '@/apis';
import { ISignUpForm } from '@/pages/user/signup';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type SignUp = {};

const useSignUpMutation = () => {
  const signup = async (param: ISignUpForm) => {
    const { data } = await axiosClient.post<ServerResponse<SignUp>>('v1/auth', {
      ...param,
      phoneNumber: '0000',
      team: 'FRONTEND',
    });

    return data;
  };

  return useMutation({
    mutationFn: (form: ISignUpForm) => signup(form),
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
};

export default useSignUpMutation;
