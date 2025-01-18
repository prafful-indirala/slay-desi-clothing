import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/forms/newsletter-form"
import { Sparkles } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col pattern-bg">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-16 py-12">
          {/* Decorative Element */}
          <div className="w-full max-w-md mx-auto">
            <div className="decorative-border mb-8" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy/70 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Launching Soon</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tight">
              Elevate Your Style with
              <span className="block mt-2">Desi Elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-navy/80 max-w-xl mx-auto leading-relaxed">
              We have a stunning collection of desi men's and women's clothing coming your way. 
              Each piece is crafted with passion and precision to bring you the finest in traditional fashion.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="w-full max-w-md space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="premium-card p-8 rounded-2xl">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-navy">Join the Waitlist</h2>
                <NewsletterForm />
                <p className="text-sm text-navy/60">
                  Be the first to experience our exclusive collection and receive special launch offers.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-2 text-navy/70 font-medium">
              <span className="px-3 py-1 rounded-full bg-navy/5">500+</span>
              <span>fashion enthusiasts already joined</span>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="w-full max-w-md mx-auto">
            <div className="decorative-border mt-8" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

