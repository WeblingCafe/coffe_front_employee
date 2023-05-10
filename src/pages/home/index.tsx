import { accessTokeneAtom } from '@/store/atoms';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokeneAtom);
  return <p>hello Home : {accessToken}</p>;
}
