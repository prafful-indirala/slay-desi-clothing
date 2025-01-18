import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="w-full py-6 px-4 bg-cream/80 backdrop-blur-sm fixed top-0 z-50 border-b border-navy/5">
      <nav className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="block w-full max-w-[180px] mx-auto transition-transform hover:scale-105"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slay-desi-new-logo%20(1)-GDwPCjJOsKn7M3PJLyz6yKSMpi4TCQ.png"
            alt="Slay Desi Clothing"
            width={600}
            height={200}
            priority
            className="w-full h-auto"
          />
        </Link>
      </nav>
    </header>
  )
}

