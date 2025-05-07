
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeroSlide } from "./HeroSlides";

interface HeroContentProps {
  currentSlide: number;
  slides: HeroSlide[];
}

const HeroContent: React.FC<HeroContentProps> = ({ currentSlide, slides }) => {
  const currentSlideData = slides[currentSlide];

  return (
    <ScrollArea className="flex flex-col space-y-8 animate-fade-in h-full">
      <div className="space-y-5 max-w-[640px]">
        <div
          className="inline-block rounded-full px-3 py-1 text-sm bg-darkblue-50/90 text-darkblue-900 backdrop-blur-sm opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards",
          }}
        >
          {currentSlideData.tag}
        </div>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.4s",
            animationFillMode: "forwards",
          }}
          dangerouslySetInnerHTML={{
            __html: currentSlideData.title,
          }}
        />
        <p
          className="text-xl text-white/90 max-w-[600px] opacity-0 animate-fade-in"
          style={{
            animationDelay: "0.6s",
            animationFillMode: "forwards",
          }}
        >
          {currentSlideData.description}
        </p>
      </div>
      <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
      >
        <Link
          to={currentSlideData.link1.to}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all font-medium hover:shadow-lg group"
        >
          {currentSlideData.link1.text}
          <ArrowRight
            size={18}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
        <Link
          to={currentSlideData.link2.to}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-darkblue-800 hover:bg-darkblue-900 transition-all font-medium hover:shadow-lg group"
        >
          {currentSlideData.link2.text}
          <ArrowRight
            size={18}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </ScrollArea>
  );
};

export default memo(HeroContent);
