import { useAuth } from '@/hooks/useAuth';

export default function Cart() {
  const { isLogin } = useAuth();
  console.log('isLogin', isLogin);

  return <p>hello cart </p>;
}
