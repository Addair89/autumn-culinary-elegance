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
import heroChef from "@/assets/meatandveggies3.jpg";
import bookingPhoto from "@/assets/brocolli-oranges.jpg";
import Footer from "@/components/ui/footer";
import dish2 from "@/assets/janevietbeef.jpg";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-80 pb-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${heroChef})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/60" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-100 mb-6">
            Let's Create Something Extraordinary
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Are you ready to transform your mundane meals into savory culinary
            experiences?
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative bg-olive/70">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto md:grid grid-cols-3 grid-rows-2 gap-6 md:gap-12 auto-rows-min">
            {/* Contact Details - Big Box */}
            <div className="relative z-10 col-span-2 row-span-1 rounded-2xl">
              <h2 className="font-display text-4xl text-center font-bold text-white underline mb-8">
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
            </div>

            {/* Top Right Image */}
            <div className="rounded-2xl m-4 md:m-0 hidden md:block overflow-hidden shadow-lg">
              <img
                src={bookingPhoto}
                alt="Dish 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Right Image */}
            <div className=" my-4 md:m-0 md:block rounded-2xl overflow-hidden shadow-lg">
              <img
                src={dish2}
                alt="Dish 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Booking Information - Big Box */}
            <div className="relative z-10 col-span-2 row-span-2 rounded-2xl">
              {/* <h2 className="font-display text-3xl font-bold text-white underline mb-8">
                Booking Information
              </h2> */}

              <Card className="p-8 mt-6 md:mt-0 shadow-elegant bg-gradient-to-br from-gold-light/10 to-salmon-light/10 border-none">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Ready to Begin?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Each menu is uniquely crafted for you.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        Initial Consultation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We'll talk about your food preferences and plan the
                        perfect service to make your life more manageable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-salmon rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        Custom Menu Creation.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Personalized menus designed specifically for your goals
                        and lifestyle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        Full-Service Experience.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        From preparation to presentation, you'll love having
                        custom meals at your fingertips for any time, any
                        occasion.
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
            Reach out today and let's start planning your perfect menu for
            effortless in-home dining without any of the work. See Jane Cook
            helps you get back the time you wish you had.
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
