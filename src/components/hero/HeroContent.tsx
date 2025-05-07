
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OfferSlide } from "./HeroSlides";

interface HeroContentProps {
  currentSlide: number;
  slides: OfferSlide[];
}

const HeroContent: React.FC<HeroContentProps> = ({ currentSlide, slides }) => {
  const currentSlideData = slides[currentSlide];

  return (
    <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
      <div
        className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50 text-darkblue-900 opacity-0 animate-fade-in"
        style={{
          animationDelay: "0.2s",
          animationFillMode: "forwards",
        }}
      >
        {currentSlideData.tag}
      </div>
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-darkblue-900 leading-tight opacity-0 animate-fade-in"
        style={{
          animationDelay: "0.4s",
          animationFillMode: "forwards",
        }}
        dangerouslySetInnerHTML={{
          __html: currentSlideData.title,
        }}
      />
      <p
        className="text-lg text-gray-700 max-w-[600px] opacity-0 animate-fade-in"
        style={{
          animationDelay: "0.6s",
          animationFillMode: "forwards",
        }}
      >
        {currentSlideData.description}
      </p>
      <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
      >
        <Link
          to={currentSlideData.primaryLink.to}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium group"
        >
          {currentSlideData.primaryLink.text}
          <ArrowRight
            size={18}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
        <Link
          to={currentSlideData.secondaryLink.to}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-darkblue-800 hover:bg-darkblue-900 transition-all font-medium group"
        >
          {currentSlideData.secondaryLink.text}
          <ArrowRight
            size={18}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default memo(HeroContent);
