import Input from '@/components/common/Input';
import styled from 'styled-components';

const SignUpWrapper = styled.div`
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
    > * {
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
  }
`;

export default function SignUp() {
  return (
    <SignUpWrapper>
      <div className="signin-box">
        <div className="signin-section">
          <h1>Webling Cafe</h1>
        </div>
        <div className="signin-section">
          <Input></Input>
          <Input></Input>
          <Input></Input>
          <Input></Input>
          <Input></Input>
        </div>
        <div className="signin-section">
          <button>회원가입</button>
        </div>
      </div>
    </SignUpWrapper>
  );
}
