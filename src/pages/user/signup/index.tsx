import Input from '@/components/common/Input';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useSignUpMutation from '@/hooks/queries/useSignUpMutation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export interface ISignUpForm {
  email: string;
  password: string;
  username: string;
  nickname: string;
  birthDate: string;
}

const schema = yup.object({
  email: yup
    .string()
    .matches(new RegExp('[a-z0-9]+@snaps+.[a-z]{2,3}'), '스냅스 이메일을 입력해주세요.')
    .required('이메일을 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
  username: yup.string().required('실명을 입력해주세요.'),
  nickname: yup.string().required('영어 이름을 입력해주세요.'),
  birthDate: yup.string().required('생일을 선택해주세요.'),
});

export default function SignUp() {
  const { register, handleSubmit, formState } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const { isLoading, mutate: signupMuate, isSuccess } = useSignUpMutation();
  const router = useRouter();

  const onSignUp = (data: ISignUpForm) => {
    signupMuate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      alert('회원가입 성공!');
      router.push('/user/signin');
    }
  }, [isSuccess]);

  return (
    <SignUpWrapper>
      <div className="signup-section">
        <h1>Webling Cafe</h1>
      </div>
      <form onSubmit={handleSubmit(onSignUp)}>
        <div className="signup-section">
          <Input
            className="signup-input"
            type="email"
            placeholder="email"
            useFormRegisterReturn={register('email')}
            error={formState.errors.email?.message ?? ''}
          ></Input>
          <Input
            className="signup-input"
            type="password"
            placeholder="password"
            useFormRegisterReturn={register('password')}
            error={formState.errors.password?.message ?? ''}
          ></Input>
          <Input
            className="signup-input"
            type="text"
            placeholder="실명"
            useFormRegisterReturn={register('username')}
            error={formState.errors.username?.message ?? ''}
          ></Input>
          <Input
            className="signup-input"
            type="text"
            placeholder="영어 이름"
            useFormRegisterReturn={register('nickname')}
            error={formState.errors.nickname?.message ?? ''}
          ></Input>
          <Input
            className="signup-input"
            type="date"
            placeholder="생일"
            useFormRegisterReturn={register('birthDate')}
            error={formState.errors.birthDate?.message ?? ''}
          ></Input>
        </div>
        <div className="signup-section">
          <button type="submit" disabled={isLoading}>
            회원가입
          </button>
        </div>
      </form>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .signup-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    .signup-input {
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

    &:disabled {
      cursor: wait;
    }
  }
`;
