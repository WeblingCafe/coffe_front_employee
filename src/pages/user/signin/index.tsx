import Input from '@/components/common/Input';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function SignIn() {
  const router = useRouter();
  return (
    <SignInWrapper>
      <div className="signin-box">
        <div className="signin-section">
          <h1>Webling Cafe</h1>
        </div>

        <form>
          <div className="signin-section">
            <Input className="signin-input" type="email" placeholder="email"></Input>
            <Input className="signin-input" type="password" placeholder="password"></Input>
          </div>

          <div className="signin-section">
            <button>로그인</button>
            <button
              type="button"
              onClick={() => {
                router.push('/user/signup');
              }}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </SignInWrapper>
  );
}

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .signin-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 100vh;
  }

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
  }
`;
