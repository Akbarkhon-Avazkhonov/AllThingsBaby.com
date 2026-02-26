import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground text-background border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-display text-xl">🍼</span>
              </div>
              <span className="font-display text-xl text-background">AllThingsBaby</span>
            </div>
            <p className="text-background/70 text-sm">
              Pure beginnings naturally. Eco-friendly baby products designed with love.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg mb-4 text-background">Shop</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Swaddles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Gear
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Toys
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Skincare
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg mb-4 text-background">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg mb-4 text-background">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-background/60">
            © {currentYear} AllThingsBaby. All rights reserved. Made with love for families everywhere.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
