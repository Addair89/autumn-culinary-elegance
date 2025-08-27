import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroChef from "@/assets/hero-chef.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import diningExperience from "@/assets/dining-experience.jpg";

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
          <h1 className="text-hero animate-fade-up mb-6">
            Personal Chef Service
          </h1>
          <p className="text-salmon animate-fade-up-delay mb-4 max-w-3xl mx-auto">
            Tucson's Answer for Made To Order Eclectic Cuisine
          </p>
          <p className="text-elegant animate-fade-up-delay mb-8 max-w-3xl mx-auto">
            Custom meal preparation service designed around your tastes and health goals, 
            with fresh ingredients and ready-to-enjoy meals delivered to your refrigerator.
          </p>
          <div className="animate-fade-up-delay">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-warm"
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What You Get
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Personalized meal preparation service that takes the stress out of cooking while supporting your health and taste preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="chef-card">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Personalized Meal Preparation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Menus tailored to your own palate and designed to support your health goals. 
                Freedom from grocery shopping - I choose only the best, freshest ingredients for your meals.
              </p>
              <ul className="space-y-2 text-muted-foreground">
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
            <div className="chef-card order-1 md:order-2">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Ready When You Are</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Exactly what you want to eat when you're tired - meals that are fully prepared, packaged, 
                and stored in your refrigerator so they're ready when you are.
              </p>
              <ul className="space-y-2 text-muted-foreground">
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

      {/* Testimonial Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-12 shadow-elegant bg-gradient-to-br from-salmon-light/10 to-gold-light/10 border-none">
            <blockquote className="text-center">
              <p className="font-display text-2xl md:text-3xl italic text-foreground mb-6 leading-relaxed">
                "Jane's meal prep service has been a game-changer for our busy family. 
                The meals are delicious, healthy, and exactly what we want to eat. 
                It's like having a personal chef without the hassle!"
              </p>
              <footer className="text-muted-foreground">
                <cite className="font-semibold">— Sarah & Michael Thompson</cite>
                <p className="text-sm mt-1">Weekly Meal Prep Service</p>
              </footer>
            </blockquote>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Simplify Your Meals?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your tastes, health goals, and schedule to create the perfect meal plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-warm"
            >
              <Link to="/about">Learn More About Our Service</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;