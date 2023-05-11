import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

export default function MyPage() {
  const { isLogin } = useAuth();
  const router = useRouter();
  console.log('isLogin', isLogin);

  return (
    <>
    <p>마이페이지</p>
      <button
        onClick={() => {
          localStorage.clear();
          router.replace('/user/signin');
        }}
      >
        로그아웃
      </button>
    </>
  );
}
