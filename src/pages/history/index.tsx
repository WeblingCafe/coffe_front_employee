import { useAuth } from '@/hooks/useAuth';

export default function History() {
  const { isLogin } = useAuth();
  console.log('isLogin', isLogin);

  return <p>hello History </p>;
}
