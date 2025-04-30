
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface HeroCarouselProps {
  className?: string;
}

const carouselImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1500&h=800",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500&h=800",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1500&h=800", 
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1500&h=800",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1500&h=800"
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    
    // Auto advance slides
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      api.off("select", handleSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <Carousel className="w-full h-full" setApi={setApi} opts={{ loop: true, align: "center" }}>
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <AspectRatio ratio={16/9} className="h-full">
                <div 
                  className={cn(
                    "w-full h-full transition-opacity duration-1000", 
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="absolute inset-0 bg-darkblue-900/70 z-10"></div>
                  <img 
                    src={image} 
                    alt={`Background ${index + 1}`} 
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"}
                  />
                </div>
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation buttons */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          <button 
            onClick={() => api?.scrollPrev()} 
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => api?.scrollNext()} 
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide 
                  ? "bg-white w-6" 
                  : "bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
