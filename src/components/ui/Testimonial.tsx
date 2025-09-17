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
      "We are big fans of Jane's cooking and her service is superb!  Her dinners are widely diverse, very flavorful and tailored to our palates. They have kept us healthy and happy for the past 8 years. Every Sunday she delivers three meals with four generous servings. Each has a main protein dish and two healthy sides.  We highly recommend her work to anyone lucky enough to have her cook for them.",
    author: "Richard & Karen",
  },
  {
    quote:
      "There's nothing two chefs love more than delicious food, whether it's something exotic and gourmet, or old time comfort food favorites. But when we don't have the time or the inclination to shop for ingredients and cook for ourselves and our families, Jane is a godsend! She listened to all our food preferences, was able to honor our gluten free requests and made wonderful suggestions. Both the entrees and side dishes are a food lover's delight with ample portions. Our top faves include Lemon Caper Halibut, Basil Shrimp, Beef Strogonoff, Couscous Salad and Roasted Vegetables. Give Jane a try, you will be spoiled forever!",
    author:
      "Susan Fulton/Mary Steiger Chef Owners Gourmet Girls Gluten Free Bakery/Bistro",
  },
  {
    quote:
      "Chef Jane has provided delicious Old-World classics that our family and friends love. She is a joy to work with and she goes above and beyond to make sure that everything is spiced just right. My fridge is always stocked with her wonderful dinners.",
    author: "Ingrid N.",
  },
];

export default function TestimonialCarousel() {
  return (
    <section
      className="py-10 bg-olive-light"
      // style={{ backgroundImage: "var(--gradient-olive-accent)" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#7c3613] text-center mb-12 drop-shadow-sm">
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
