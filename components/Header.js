import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <header>
      <Image
        className="cursor-pointer"
        onClick={() => router.push('/')}
        src="/images/google.png"
        height={40}
        width={120}
      />
    </header>
  );
}

export default Header;
