import type { NextPage } from 'next';
import Image from 'next/image';

import HomeIntro from '@/lib/components/samples/HomeIntro';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <Image
        src="/banner.png"
        width={1200}
        height={320}
        alt="Mana tandoor"
        priority
        className="rounded-3xl"
      />
      <HomeIntro />
    </div>
  );
};

export default Home;
