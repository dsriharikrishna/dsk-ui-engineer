import { FC } from "react";
import Link from "next/link";
import { siteContent } from "@/constants/content";
import * as Icons from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer className="bg-surface-lighter py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-blue mb-6 inline-block">
            {siteContent.brandName}.
          </Link>
          <p className="text-foreground/60 max-w-sm mb-8">
            We build scalable apps that grow your business. From idea to production — fast, reliable, and secure.
          </p>
          <div className="space-y-2 text-sm text-foreground/60">
            <p className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icons.Mail size={16} />
              <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
            </p>
            <p className="flex items-center gap-2 hover:text-primary transition-colors">
              <Icons.MessageCircle size={16} />
              <a href={`https://wa.me/${siteContent.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Services</h4>
          <ul className="space-y-4 text-foreground/60">
            <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Deployment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Company</h4>
          <ul className="space-y-4 text-foreground/60">
            <li><Link href="/projects" className="hover:text-primary transition-colors">Our Work</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-border text-center text-foreground/40 text-sm">
        <p>&copy; {new Date().getFullYear()} {siteContent.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
};
