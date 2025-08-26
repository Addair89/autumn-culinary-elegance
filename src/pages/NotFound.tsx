import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gradient-warm">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="font-display text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            This page seems to have gone back to the kitchen
          </p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist, but our delicious content is just a click away.
          </p>
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-warm"
          >
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
