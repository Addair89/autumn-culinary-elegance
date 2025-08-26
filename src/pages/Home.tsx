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
            Culinary Excellence
          </h1>
          <p className="text-elegant animate-fade-up-delay mb-8 max-w-3xl mx-auto">
            CCCP Accredited Private Chef specializing in intimate dining experiences, 
            exclusive events, and bespoke seasonal menus crafted with passion and precision.
          </p>
          <div className="animate-fade-up-delay">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-warm"
            >
              <Link to="/contact">Reserve Your Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Signature Experiences
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From intimate dinner parties to grand celebrations, every dish tells a story of seasonal ingredients and culinary artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="chef-card">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Private Dining Experiences</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform your home into a world-class restaurant. Each menu is thoughtfully crafted using 
                the finest seasonal ingredients, showcasing modern techniques with classical foundations.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Custom seasonal menus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Wine pairing consultations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Full-service dining experience
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
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Special Events & Celebrations</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether it's an anniversary, birthday, or corporate gathering, create unforgettable memories 
                with cuisine that reflects the importance of your special occasion.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Intimate gatherings (2-12 guests)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Corporate events & tastings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rusty-red rounded-full mr-3"></span>
                  Holiday & celebration menus
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
                "Chef Alexander transformed our anniversary dinner into an extraordinary culinary journey. 
                Every course was a masterpiece that perfectly captured the essence of autumn. 
                Truly an unforgettable experience."
              </p>
              <footer className="text-muted-foreground">
                <cite className="font-semibold">— Sarah & Michael Thompson</cite>
                <p className="text-sm mt-1">20th Anniversary Celebration</p>
              </footer>
            </blockquote>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Culinary Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Discover what makes each dining experience unique. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-warm"
            >
              <Link to="/about">Learn More About Chef Alexander</Link>
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