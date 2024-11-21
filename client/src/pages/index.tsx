import React, { useRef, useCallback, useEffect } from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import FeatureCard from '../components/FeatureCard'

const DOTA_HEROES = [
  'antimage', 'axe', 'crystal_maiden', 'drow_ranger', 'earthshaker',
  'juggernaut', 'mirana', 'morphling', 'nevermore', 'phantom_lancer',
  'puck', 'pudge', 'razor', 'sand_king', 'storm_spirit',
  'sven', 'tiny', 'vengefulspirit', 'windrunner', 'zeus'
];

const Home: NextPage = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const heroesCarouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const animate = useCallback(() => {
    if (!carouselRef.current || !heroesCarouselRef.current) return;

    const featuresScroll = carouselRef.current;
    featuresScroll.scrollLeft += 1;
    if (featuresScroll.scrollLeft >= featuresScroll.scrollWidth - featuresScroll.clientWidth) {
      featuresScroll.scrollLeft = 0;
    }

    const heroesScroll = heroesCarouselRef.current;
    heroesScroll.scrollLeft += 1;
    if (heroesScroll.scrollLeft >= heroesScroll.scrollWidth - heroesScroll.clientWidth) {
      heroesScroll.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    const carouselElement = carouselRef.current;
    const heroesCarouselElement = heroesCarouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', handleMouseEnter);
      carouselElement.addEventListener('mouseleave', handleMouseLeave);
    }

    if (heroesCarouselElement) {
      heroesCarouselElement.addEventListener('mouseenter', handleMouseEnter);
      heroesCarouselElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', handleMouseEnter);
        carouselElement.removeEventListener('mouseleave', handleMouseLeave);
      }

      if (heroesCarouselElement) {
        heroesCarouselElement.removeEventListener('mouseenter', handleMouseEnter);
        heroesCarouselElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [animate]);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#C4B454]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Уникальность",
      description: "Каждый сгенерированный ник уникален и неповторим"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#C4B454]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Мгновенно",
      description: "Получайте результат за считанные секунды"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#C4B454]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Гибкость",
      description: "Настраивайте параметры генерации под свои нужды"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-dark">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 pt-32">
        <HomeHero />
        <div className="mt-24 mb-24">
  <h3 className="text-2xl font-bold text-white mb-8 font-onest text-center">
    Почему именно мы?
  </h3>
  
  <div className="features-scroll">
    <div className="infinite-scroll">
      {[...features, ...features, ...features].map((feature, index) => (
        <FeatureCard 
          key={index}
          {...feature}
        />
      ))}
    </div>
  </div>
</div>
      </main>
    </div>
  )
}

export default Home