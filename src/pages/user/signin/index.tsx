import Input from '@/components/common/Input';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useSignInMutation from '@/hooks/queries/useSignInMutation';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

export interface ISignInForm {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required('이메일을 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<ISignInForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const { isLoading, mutate: signinMuate, isSuccess } = useSignInMutation();
  const { isLogin } = useAuth();

  const onSignIn = (data: ISignInForm) => {
    signinMuate(data);
  };

  useEffect(() => {
    if (isLogin) {
      router.push('/home');
    }
  }, [isLogin]);

  useEffect(() => {
    if (isSuccess) {
      router.push('/home');
    }
  }, [isSuccess]);

  const router = useRouter();
  return (
    <SignInWrapper>
      <div className="signin-section">
        <h1>Webling Cafe</h1>
      </div>

      <form onSubmit={handleSubmit(onSignIn)}>
        <div className="signin-section">
          <Input
            className="signin-input"
            type="email"
            placeholder="email"
            useFormRegisterReturn={register('email')}
            error={formState.errors.email?.message ?? ''}
          ></Input>
          <Input
            className="signin-input"
            type="password"
            placeholder="password"
            useFormRegisterReturn={register('password')}
            error={formState.errors.password?.message ?? ''}
          ></Input>
        </div>

        <div className="signin-section">
          <button type="submit" disabled={isLoading}>
            로그인
          </button>
          <button
            type="button"
            disabled={isLoading}
            onClick={() => {
              router.push('/user/signup');
            }}
          >
            회원가입
          </button>
        </div>
      </form>
    </SignInWrapper>
  );
}

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .signin-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    .signin-input {
      margin-bottom: 10px;
    }
  }

  button {
    width: 300px;
    height: 50px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #959595;
    color: white;
    margin-bottom: 10px;

    &:disabled {
      cursor: wait;
    }
  }
`;
