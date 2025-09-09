import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroChef from "@/assets/hero-chef-dark.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import diningExperience from "@/assets/drumsticks.webp";
import diningExperience2 from "@/assets/tomato-dish.jpg";
import TestimonialCarousel from "@/components/ui/Testimonial";
import Footer from "@/components/ui/footer";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Mobile image fallback */}
        <img
          src={heroChef}
          alt="Hero Chef"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* Desktop parallax background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroChef})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

        {/* Content */}
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <h1 className="text-olive-light animate-fade-up mb-6 text-5xl md:text-7xl font-display font-bold">
            See Jane Cook
          </h1>
          <p className="text-olive-light uppercase animate-fade-up-delay mb-4 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            The longest operating personal chef service in Tucson. Established
            in 2000.
          </p>
          <p className="text-white/80 animate-fade-up-delay mb-8 max-w-3xl mx-auto text-lg">
            Custom meal preparation service designed around your tastes and
            health goals, with fresh ingredients and ready-to-enjoy meals
            delivered to your refrigerator.
          </p>
          <div className="animate-fade-up-delay">
            <Button
              asChild
              size="lg"
              className="bg-olive hover:bg-olive/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-warm"
            >
              <Link to="/contact">Lets Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-24 bg-rusty-red-dark/90"
        // style={{ backgroundImage: "var(--gradient-accent)" }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-200 mb-4">
              Your Service Includes
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Exactly what you want to eat without any of the work. Exquisitely
              prepared meals from family favorites to unique international
              cuisine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="chef-card bg-[#faebd7]">
              <h3 className="font-display capitalize text-2xl font-bold mb-4 text-neutral-950">
                All cuisine is made to your individual palate, supporting your
                wellness journey and lifestyle.
              </h3>
              <ul className="space-y-2 text-neutral-950">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Customized menu planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Complete grocery shopping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Fully cooked meals packaged and labeled
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Simple heating instructions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  More time to relax with your family
                </li>
              </ul>
            </div>
            <div className="relative group">
              <img
                src={signatureDish}
                alt="Signature autumn dish with golden vegetables and salmon"
                className="w-full h-80 object-cover rounded-lg shadow-elegant animate-scale-hover"
              />
              <div className="image-overlay group-hover:active rounded-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="relative group order-2 md:order-1">
              <img
                src={diningExperience}
                alt="Elegant autumn dinner party setup with candlelight"
                className="w-full h-80 object-cover rounded-lg shadow-elegant animate-scale-hover"
              />
              <div className="image-overlay group-hover:active rounded-lg" />
            </div>
            <div className="chef-card bg-[#faebd7] order-1 md:order-2">
              <h3 className="font-display capitalize text-2xl font-bold mb-4 text-neutral-950">
                Dinner time couldn't be more convenient
              </h3>
              <ul className="space-y-2 text-neutral-950">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Top-notch ingredients sourced for all your meals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Expertise in allergies and special diets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Meals packaged for fridge or freezer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  No more food waste
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Heat and eat in a matter of minutes
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="chef-card bg-[#faebd7]">
              <h3 className="font-display capitalize text-2xl font-bold mb-4 text-neutral-950">
                Learn the techniques and recipes that empower you to create
                delicious meals at home
              </h3>
              <ul className="space-y-2 text-neutral-950">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Individual and small group lessons
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Hands on cooking experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  You choose your own curriculum
                </li>
              </ul>
            </div>
            <div className="relative group">
              <img
                src={diningExperience2}
                alt="Signature autumn dish with golden vegetables and salmon"
                className="w-full h-80 object-cover rounded-lg shadow-elegant animate-scale-hover"
              />
              <div className="image-overlay group-hover:active rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Accommodations Scrolling Strip */}
      <section className="py-12 bg-gradient-accent bg-opacity-80 overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gold-light mb-4">
            Dietary Accommodations
          </h2>
          <p className="text-center text-gold-light text-lg">
            Expertly crafted meals for your specific dietary needs
          </p>
        </div>
        <div className="dietary-scroll-container">
          <div className="dietary-scroll-strip">
            <div className="dietary-item">Organics</div>
            <div className="dietary-item">WW</div>
            <div className="dietary-item">Liver Flush</div>
            <div className="dietary-item">Diabetic</div>
            <div className="dietary-item">Dairy Free</div>
            <div className="dietary-item">Gluten Free</div>
            <div className="dietary-item">Kosher</div>
            <div className="dietary-item">Vegan</div>
            <div className="dietary-item">Diabetic</div>
            <div className="dietary-item">Vegetarian</div>
            <div className="dietary-item">Keto</div>
            <div className="dietary-item">Elimination</div>
            <div className="dietary-item">Heart Healthy</div>
            <div className="dietary-item">Food Allergies</div>
            <div className="dietary-item">Low Fat</div>
            {/* Duplicate items for seamless loop */}
            <div className="dietary-item">Organics</div>
            <div className="dietary-item">WW</div>
            <div className="dietary-item">Liver Flush</div>
            <div className="dietary-item">Diabetic</div>
            <div className="dietary-item">Dairy Free</div>
            <div className="dietary-item">Gluten Free</div>
            <div className="dietary-item">Kosher</div>
            <div className="dietary-item">Vegan</div>
            <div className="dietary-item">Diabetic</div>
            <div className="dietary-item">Vegetarian</div>
            <div className="dietary-item">Keto</div>
            <div className="dietary-item">Elimination</div>
            <div className="dietary-item">Heart Healthy</div>
            <div className="dietary-item">Food Allergies</div>
            <div className="dietary-item">Low Fat</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display capitalize text-4xl md:text-5xl font-bold text-black/65 mb-6">
            Everyday dining made effortlessly elegant!
          </h2>
          <p className="text-black/65 text-lg mb-8 max-w-2xl mx-auto">
            Lets discuss everything food so I can create the perfect service
            just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rusty-red text-black/65 hover:bg-olive/90 px-8 py-4 text-lg font-semibold rounded-full shadow-warm"
            >
              <Link to="/about">Learn More About Our Service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-gold text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
