import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import chefPortrait from "@/assets/chef-portrait.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import diningExperience from "@/assets/dining-experience.jpg";
import TestimonialCarousel from "@/components/ui/Testimonial";
import Footer from "@/components/ui/footer";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div>
            <h2 className="text-4xl font-bold text-rusty-red mb-6">
              Meet Jane
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Chef Jane is a CCCP Accredited Private Chef specializing in
              seasonal, locally sourced cuisine that brings warmth, elegance,
              and unforgettable flavors to the table. With years of experience,
              she crafts unique dining experiences tailored to each client’s
              needs, blending tradition with innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it’s an intimate dinner party, a family gathering, or a
              special celebration, Chef Jane transforms every meal into a
              culinary experience to remember.
            </p>
          </div>

          {/* Right column - Single Image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={chefPortrait} // Replace with actual image
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
              Professional Credentials & Training
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
                  CCCP Accredited
                </h3>
                <p className="text-sm text-muted-foreground">
                  Certified by the Culinary Certification Council of
                  Professionals with specialization in private dining
                </p>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-salmon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-salmon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  15+ Years Experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Extensive experience in fine dining establishments across
                  Europe and North America
                </p>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-olive"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Culinary Institute Graduate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Graduate of Le Cordon Bleu with advanced certification in
                  classical and modern techniques
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
