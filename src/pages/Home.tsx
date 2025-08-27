import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroChef from "@/assets/hero-chef-dark.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import diningExperience from "@/assets/dining-experience.jpg";
import TestimonialCarousel from "@/components/ui/Testimonial";
import Footer from "@/components/ui/footer";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroChef})` }}
      >
        <div className="hero-overlay" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-olive-light animate-fade-up mb-6 text-5xl md:text-7xl font-display font-bold">
            Personal Chef Service
          </h1>
          <p className="text-olive-light animate-fade-up-delay mb-4 max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            Tucson's Answer for Made To Order Eclectic Cuisine
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
              <Link to="/contact">Start Your Meal Plan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black/85 mb-4">
              What You Get
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Personalized meal preparation service that takes the stress out of
              cooking while supporting your health and taste preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="chef-card chef-card-salmon">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                Personalized Meal Preparation
              </h3>
              <p
                className="mb-6 leading-relaxed"
                style={{ color: "hsl(var(--foreground) / 0.9)" }}
              >
                Menus tailored to your own palate and designed to support your
                health goals. Freedom from grocery shopping - I choose only the
                best, freshest ingredients for your meals.
              </p>
              <ul
                className="space-y-2"
                style={{ color: "hsl(var(--foreground) / 0.9)" }}
              >
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Menus tailored to your palate and health goals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Fresh ingredient sourcing and shopping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Fully prepared and packaged meals
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
            <div className="chef-card chef-card-olive order-1 md:order-2">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                Ready When You Are
              </h3>
              <p
                className="mb-6 leading-relaxed"
                style={{ color: "hsl(var(--foreground) / 0.9)" }}
              >
                Exactly what you want to eat when you're tired - meals that are
                fully prepared, packaged, and stored in your refrigerator so
                they're ready when you are.
              </p>
              <ul
                className="space-y-2"
                style={{ color: "hsl(var(--foreground) / 0.9)" }}
              >
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Meals stored ready in your refrigerator
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Simple heating instructions included
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Relax and enjoy delicious dinner in minutes
                </li>
              </ul>
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
            <div className="dietary-item">Raw Foods</div>
            <div className="dietary-item">Yeast Free</div>
            <div className="dietary-item">Atkins</div>
            <div className="dietary-item">South Beach</div>
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
            <div className="dietary-item">Raw Foods</div>
            <div className="dietary-item">Yeast Free</div>
            <div className="dietary-item">Atkins</div>
            <div className="dietary-item">South Beach</div>
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black/65 mb-6">
            Ready to Simplify Your Meals?
          </h2>
          <p className="text-black/65 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your tastes, health goals, and schedule to create the
            perfect meal plan just for you.
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
