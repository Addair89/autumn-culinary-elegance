import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import heroChef from "@/assets/hero-chef.jpg";
import Footer from "@/components/ui/footer";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-56 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroChef})` }}
        />
        <div className="absolute inset-0 bg-salmon/30" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Create Something Extraordinary
          </h1>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Ready to transform your next dining occasion into an unforgettable
            culinary experience? I'm here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 chef-card flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+1 (520) 360-2299</p>
                    </div>
                  </Card>

                  <Card className="p-6 chef-card flex items-start space-x-4">
                    <div className="w-12 h-12 bg-salmon/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-salmon" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        chefjane@seejanecook.com
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 chef-card flex items-start space-x-4">
                    <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-olive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Service Area
                      </h3>
                      <p className="text-muted-foreground">All of Tucson</p>
                    </div>
                  </Card>
                </div>

                {/* Social Media */}
              </div>

              {/* Booking Information */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Booking Information
                </h2>

                <Card className="p-8 shadow-elegant bg-gradient-to-br from-gold-light/10 to-salmon-light/10 border-none">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Ready to Begin?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Each culinary experience is uniquely crafted for you.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Initial Consultation
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We will talk and plan your perfect dining experience.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-salmon rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Custom Menu Creation
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Personalized menu designed specifically for your goals
                          and preferences.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Full-Service Experience
                        </p>
                        <p className="text-sm text-muted-foreground">
                          From preparation to presentation, every detail is
                          handled with professional care
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-full shadow-warm"
                      onClick={() =>
                        (window.location.href = "tel:+1(520)360-2299")
                      }
                    >
                      Call to Schedule Consultation
                    </Button>
                  </div>
                </Card>

                {/* <Card className="mt-6 p-6 shadow-soft">
                  <h4 className="font-semibold text-foreground mb-3">
                    Frequently Asked Questions
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-foreground">
                        Do you accommodate dietary restrictions?
                      </p>
                      <p className="text-muted-foreground">
                        Absolutely. I specialize in creating beautiful menus for
                        all dietary needs including vegetarian, vegan,
                        gluten-free, and allergen-specific requirements.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        What's included in the service?
                      </p>
                      <p className="text-muted-foreground">
                        Full-service includes menu planning, grocery shopping,
                        preparation, cooking, plating, service, and cleanup.
                        Wine pairing consultation available upon request.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        How far in advance should I book?
                      </p>
                      <p className="text-muted-foreground">
                        For the best experience, I recommend booking 2-3 weeks
                        in advance. However, I can sometimes accommodate shorter
                        notice depending on availability.
                      </p>
                    </div>
                  </div>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black/65 mb-4">
            Your Culinary Adventure Awaits
          </h2>
          <p className="text-black/65/90 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait to create extraordinary memories. Reach out today and
            let's start planning your perfect dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-black/65 hover:bg-white/90 px-8 py-3 text-lg font-semibold rounded-full shadow-warm"
              onClick={() =>
                (window.location.href = "mailto:jane@seejanecook.com")
              }
            >
              Send Email
            </Button>
            <Button
              variant="outline"
              className="border-white text-black/65 hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold rounded-full"
              onClick={() => (window.location.href = "tel:+15551234567")}
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
