import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import chefJaneLogo from "@/assets/ChefJaneLogo.png";
import signatureDish from "@/assets/signature-dish.jpg";
import diningExperience from "@/assets/dining-experience.jpg";
import TestimonialCarousel from "@/components/ui/Testimonial";
import Footer from "@/components/ui/footer";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full bg-olive py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-200 mb-6">Meet Jane</h2>
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
              Chef Jane is an accredited personal chef specializing in seasonal,
              locally sourced cuisine that brings warmth, elegance, and
              unforgettable flavors to the table. With 25+ years of experience,
              she crafts unique dining experiences tailored to each client's
              needs, blending tradition with innovation.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed">
              Whether it's an intimate dinner party, a family gathering, or a
              special celebration, Chef Jane transforms every meal into a
              culinary experience to remember.
            </p>
          </div>

          {/* Right column - Single Image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={chefJaneLogo} // Replace with actual image
              alt="Chef [Name] portrait"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-black/65 mb-8">
              Professional Credentials & Experience
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Private Lessons
                </h3>
                <p className="text-sm text-muted-foreground">
                  I offer personalized cooking lessons for individuals and small
                  groups, teaching techniques and recipes that empower you to
                  create delicious meals at home.
                </p>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-salmon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-salmon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a5 5 0 00-5 5c0 1.4.58 2.67 1.52 3.58A6.99 6.99 0 006 17v3a1 1 0 001 1h10a1 1 0 001-1v-3a6.99 6.99 0 00-2.52-6.42A4.978 4.978 0 0017 7a5 5 0 00-5-5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  25+ Years of Culinary Expertise
                </h3>
                <p className="text-sm text-muted-foreground">
                  With over 25 years of professional experience, Chef Jane
                  brings world-class training and creativity to every plate,
                  ensuring an unforgettable dining experience.
                </p>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-olive"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2a1 1 0 011 1v6a2 2 0 01-2 2v10a1 1 0 11-2 0V11a2 2 0 01-2-2V3a1 1 0 112 0v6h1V3a1 1 0 011-1zm10 0a2 2 0 012 2v6a4 4 0 01-3 3.87V21a1 1 0 11-2 0v-7.13A4 4 0 0115 10V4a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Personalized Fine Dining
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every dish is crafted with high-quality, locally sourced
                  ingredients and presented with care. Chef Jane combines
                  refined flavors with personalized service, creating a dining
                  experience that feels as special as it tastes.
                </p>
              </Card>
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
