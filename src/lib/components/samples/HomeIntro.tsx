import { AiOutlineWhatsApp } from 'react-icons/ai';

import { Button } from '../ui/button';

const HomeIntro = () => {
  return (
    <div className="grid gap-2.5">
      <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text bg-clip-text text-7xl font-bold text-transparent text-transparent">
        మన Tandoor
      </h1>
      <p className="text-lg">
        At మన tandoor, we are passionate about delivering an exceptional dining
        experience to our guests. Our journey began with a vision to blend
        traditional flavors with modern culinary techniques, resulting in a menu
        that celebrates the rich heritage of Indian cuisine. Explore the perfect
        harmony of spices and textures in every dish, crafted with love and
        expertise by our talented chefs.
      </p>
      {/* 
      add a whatsapp button +91 81257 88683
      */}
      <div>
        <div className="mt-3 text-lg">Contact Us at </div>
        <Button className="gap-3 text-lg">
          <a
            href="https://wa.me/918125788683"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 8125788683
          </a>
          <AiOutlineWhatsApp />
        </Button>
      </div>
    </div>
  );
};

export default HomeIntro;
