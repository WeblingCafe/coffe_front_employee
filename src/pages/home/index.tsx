import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { isLogin } = useAuth();
  console.log('isLogin', isLogin);

  return <p>hello Home </p>;
}
