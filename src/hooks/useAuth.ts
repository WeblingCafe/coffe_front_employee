import { useRecoilState } from 'recoil';
import { loginStateAtom } from '@/store/atoms';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginStateAtom);
  const router = useRouter();

  useEffect(() => {
    const hasToken = localStorage.getItem('access_token');
    setIsLogin(hasToken ? true : false);
  }, [setIsLogin]);

  useEffect(() => {
    if (!isLogin && router.asPath.includes('/user/')) {
      return;
    }
    if (!isLogin) {
      router.replace('/user/signin');
      return;
    }
  }, [isLogin, router]);

  return { isLogin };
};
