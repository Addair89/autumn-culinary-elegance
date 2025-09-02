"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Chef Jane's services are invaluable to my family. Her food is delicious and beautifully prepared. My entire family (especially the kids), look forward to everything that is prepared by Chef Jane. Not only is she a wonderful chef, she is very personable, warm and thoughtful. Your family will thank you for calling Chef Jane.",
    author: "Sharon P.",
  },
  {
    quote:
      "As busy professionals, the last thing my husband and I want to do at the end of the day is cook! Jane's service has provided us with scrumptious, no hassle food that is precisely to our liking.",
    author: "Anne C.",
  },
  {
    quote:
      "Jane's attention to customer service is as good as her food. Her initial consultation was very thorough and provided a good baseline for our first menu. Feedback was well received and provided even more customized menus in following months.",
    author: "Steve G.",
  },
  {
    quote:
      "Jane has been able to meet our particular dietary needs and provide very tasty entrees. We have enjoyed having good meals at home instead of eating on the run.",
    author: "Kay R.",
  },
  {
    quote:
      "Wow – do I love coming home after you've spent a day in my kitchen. Not only does my house smell amazing, but your food is always so delicious. Those roasted veggies are the best I ever had and we just love the great variety of dishes that you've prepared for us like the Apricot Glazed Cornish Hens and Veal in Wild Mushroom sauce. We feel completely indulged with your cooking and can't thank you enough for being a part of our lives.",
    author: "Lori G.",
  },
  {
    quote:
      "Chef Jane Cherry constantly amazes me. She approaches her work and her clients with attentiveness and vigor. Jane always seeks the best foods, the best cooking techniques – whatever she feels she needs to make her clients and herself happy. Very few people take the time or make the effort like she does anymore. So refreshing!",
    author: "K. Kruger, Food Service & Menu Development Consultant",
  },
];

export default function TestimonialCarousel() {
  return (
    <section
      className="py-10"
      style={{ backgroundImage: "var(--gradient-olive-accent)" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-rusty-red-dark text-center mb-12 drop-shadow-sm">
          What People Are Saying About Jane
        </h2>

        <Carousel
          plugins={[
            Autoplay({
              delay: 9000,
            }),
          ]}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="p-10 bg-black/65 rounded-2xl shadow-md text-center backdrop-blur-sm">
                  <p className="text-white/90 italic text-lg md:text-xl">
                    "{t.quote}"
                  </p>
                  <p className="mt-6 font-semibold text-white/90 text-lg">
                    – {t.author}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Hide arrows on small screens */}
          <div className="hidden md:flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
