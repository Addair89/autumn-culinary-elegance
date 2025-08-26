import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import chefPortrait from "@/assets/chef-portrait.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import diningExperience from "@/assets/dining-experience.jpg";

const About = () => {
  const testimonials = [
    {
      quote: "Chef Alexander's attention to detail is unmatched. The seasonal menu he created for our corporate retreat was both innovative and comforting. Our guests are still talking about the butternut squash soup with truffle oil.",
      author: "Jessica Chen",
      occasion: "Corporate Retreat Dinner",
      image: signatureDish
    },
    {
      quote: "We hired Chef Alexander for our daughter's wedding reception, and he exceeded every expectation. The autumn-inspired menu was perfectly executed, and the presentation was restaurant-quality. Absolutely phenomenal.",
      author: "Robert & Maria Gonzalez",
      occasion: "Wedding Reception",
      image: diningExperience
    },
    {
      quote: "As someone who has dined at Michelin-starred restaurants worldwide, I can confidently say that Chef Alexander's skill rivals the best. His farm-to-table approach and seasonal creativity are truly exceptional.",
      author: "Dr. Amanda Foster",
      occasion: "Private Birthday Celebration",
      image: chefPortrait
    },
    {
      quote: "The cooking class Chef Alexander provided for our anniversary was magical. Not only did we learn incredible techniques, but we also enjoyed the most romantic dinner of our lives. A perfect blend of education and elegance.",
      author: "Thomas & Claire Mitchell",
      occasion: "Private Cooking Class & Dinner",
      image: signatureDish
    },
    {
      quote: "Chef Alexander catered our book club's harvest dinner, and it was absolutely divine. Each course paired beautifully with our wine selection, and the storytelling behind each dish made the evening even more special.",
      author: "The Literary Ladies Book Club",
      occasion: "Seasonal Harvest Dinner",
      image: diningExperience
    },
    {
      quote: "Working with Chef Alexander for our holiday party was seamless from start to finish. His professional demeanor, exceptional culinary skills, and ability to accommodate dietary restrictions made our event stress-free and delicious.",
      author: "Mark Sullivan",
      occasion: "Holiday Corporate Party",
      image: chefPortrait
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet Chef Alexander Rosé
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over 15 years of culinary excellence and CCCP accreditation, Chef Alexander brings 
                world-class expertise to your private dining experiences.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm font-semibold text-primary mb-1">CCCP Accredited</p>
                <p className="text-sm text-muted-foreground">
                  Certified by the Culinary Certification Council of Professionals
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={chefPortrait} 
                alt="Chef Alexander Rosé professional portrait"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-soft border">
                <p className="font-semibold text-primary">15+ Years</p>
                <p className="text-sm text-muted-foreground">Culinary Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Culinary Philosophy
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                My culinary journey began in the bustling kitchens of Lyon, France, where I learned that 
                exceptional cuisine is born from the marriage of technique, creativity, and the finest ingredients. 
                After training under renowned chefs across Europe and earning my CCCP accreditation, I discovered 
                my true passion: creating intimate, personalized dining experiences that tell a story.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Every menu I craft is a reflection of the season, the occasion, and the unique preferences of my clients. 
                I believe that food should not only nourish the body but also create lasting memories. Whether working 
                with locally-sourced autumn vegetables or the finest imported ingredients, my approach remains consistent: 
                respect for the ingredient, precision in technique, and creativity in presentation.
              </p>
              <p className="text-lg leading-relaxed">
                When you invite me into your home, you're not just hiring a chef – you're partnering with someone 
                who is genuinely passionate about transforming your vision into an extraordinary culinary reality. 
                From the initial consultation to the final course, every detail is carefully considered to ensure 
                your dining experience exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="chef-card h-full flex flex-col">
                <div className="mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.occasion} dining experience`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <blockquote className="flex-grow">
                  <p className="text-muted-foreground italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <cite className="font-semibold text-foreground not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.occasion}
                    </p>
                  </footer>
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Professional Credentials & Training
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">CCCP Accredited</h3>
                <p className="text-sm text-muted-foreground">
                  Certified by the Culinary Certification Council of Professionals with specialization in private dining
                </p>
              </Card>
              
              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-salmon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-salmon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">15+ Years Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Extensive experience in fine dining establishments across Europe and North America
                </p>
              </Card>
              
              <Card className="p-6 shadow-soft">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-olive" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Culinary Institute Graduate</h3>
                <p className="text-sm text-muted-foreground">
                  Graduate of Le Cordon Bleu with advanced certification in classical and modern techniques
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;