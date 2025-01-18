import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-cream/80 backdrop-blur-sm border-t border-navy/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-8">
          <Link href="#" className="text-sm text-navy/60 hover:text-navy transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-navy/60 hover:text-navy transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-navy/60 hover:text-navy transition-colors">
            Contact Us
          </Link>
        </div>
        <p className="text-sm text-navy/60">
          © {new Date().getFullYear()} Slay Desi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

