import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import chefJanePortrait from "@/assets/ChefJaneLogo.png";
import dish1 from "@/assets/cauliflower.webp";
import dish2 from "@/assets/brussels.jpg";
import dish3 from "@/assets/janes-beets.webp";
import signatureBanner from "@/assets/janes-chicken.webp";
import TestimonialCarousel from "@/components/ui/Testimonial";
import Footer from "@/components/ui/footer";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full bg-olive py-32 px-6">
        <div className="max-w-7xl mx-auto md:flex justify-center gap-12 items-center">
          {/* Left column - Text */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-bold text-card mb-6 mt-6">
              Meet Jane
            </h2>
            <p className="text-lg text-card leading-relaxed mb-6">
              Chef Jane has been creating delicious cuisine for her clients
              since her business opened in May 2000. Chef Jane specializes in
              colorful, delectable offerings that are made-from-scratch healthy
              and support her clients' lifestyles. From traditional classics
              like Stuffed Cabbage and Authentic Hungarian Goulash to Exotic
              Brinjal and Curries, Chef Jane's clients experience new and unique
              menus with each service.
            </p>
            <p className="text-lg text-card leading-relaxed">
              Chef Jane's attention to detail and her quest for sourcing the
              best quality ingredients provides her clients with distinctive,
              high-quality cuisine that takes minutes to serve. After years in
              the restaurant industry, See Jane Cook was born to help busy
              people eat well without any of the hassle to plan, shop, or cook.
              Tasty, eclectic convenience is just a click away.
            </p>
          </div>

          {/* Right column - Single Image */}
          <div className="flex-1 max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <img
              src={dish3}
              alt="Chef Jane portrait"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Full-width Banner */}
      <section
        className="relative h-[500px] bg-top bg-cover flex items-center justify-center md:bg-fixed"
        style={{
          backgroundImage: `url(${signatureBanner})`, // replace with your actual path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl uppercase font-bold drop-shadow-lg leading-relaxed">
            A culinary experience designed <br></br> to delight every palate.
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md"></p>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-card text-center mb-12">
            Professional Experience
          </h2>

          <div className="grid md:grid-cols-3 md:auto-rows-[250px] gap-6">
            {/* Image 1 (large) */}
            <div className="relative col-span-2 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={dish2}
                alt="Chef in action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Card 1 */}
            <Card className="p-6 bg-card backdrop-blur-md rounded-2xl shadow-soft flex flex-col justify-center">
              <div>
                <h3 className="font-semibold text-center text-2xl text-foreground mb-2">
                  Cooking Classes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Chef Jane offers private cooking lessons for individuals and
                  small groups. Pizza making, outdoor grilling, and
                  international cuisines are all waiting so you can learn
                  hands-on techniques to gain confidence in the kitchen.
                </p>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 bg-card backdrop-blur-md rounded-2xl shadow-soft flex flex-col justify-center">
              <div>
                <h3 className="font-semibold text-foreground text-center text-2xl mb-2">
                  25+ Years In Business
                </h3>
                <p className="text-sm text-muted-foreground">
                  There's a reason See Jane Cook is the longest operating
                  personal chef service in Tucson. Fantastic food, generous
                  portions, and ideal meals for family or entertaining.
                </p>
              </div>
            </Card>

            {/* Image 2 (large) */}
            <div className="relative col-span-2 row-span-1 rounded-2xl overflow-hidden">
              <img
                src={dish1}
                alt="Prepared dish"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />
      <Footer />
    </main>
  );
};

export default About;
