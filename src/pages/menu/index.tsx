import { useAuth } from '@/hooks/useAuth';

export default function Menu() {
  const { isLogin } = useAuth();
  console.log('isLogin', isLogin);

  return <p>hello Menu </p>;
}
