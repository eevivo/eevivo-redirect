import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Index = () => {
  const handleRedirect = () => {
    window.location.href = "https://batteryproof.com";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(220_20%_10%)] to-[hsl(195_100%_15%)] animate-gradient-shift bg-200" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Old brand - fading out */}
        <div className="mb-8 opacity-60 animate-fade-in">
          <p className="text-muted-foreground text-lg mb-2">Formerly known as</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground/70 line-through decoration-primary/50">
            Eevivo
          </h2>
        </div>

        {/* Arrow or transition indicator */}
        <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <Zap className="w-12 h-12 text-primary animate-float" />
            <div className="absolute inset-0 blur-xl bg-primary/50 animate-glow-pulse" />
          </div>
        </div>

        {/* New brand - bold and energized */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-shift bg-200">
            BatteryProof
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            We're the same team you trust, now with a{" "}
            <span className="text-primary font-semibold">supercharged</span> new identity
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={handleRedirect}
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-[0_0_40px_hsl(195_100%_50%/0.4)] hover:shadow-[0_0_60px_hsl(195_100%_50%/0.6)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Visit BatteryProof.com
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift-slow bg-200" />
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            You'll be redirected to our new home
          </p>
        </div>

        {/* Decorative particles */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};

export default Index;
