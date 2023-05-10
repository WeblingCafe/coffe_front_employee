import { useAuth } from '@/hooks/useAuth';

export default function MyPage() {
  const { isLogin } = useAuth();
  console.log('isLogin', isLogin);

  return <p>hello MyPage </p>;
}
