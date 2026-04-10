import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import redratechLogo from "@/assets/Redratech.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-heading font-bold text-lg">Saratha Vidhyalaya</h3>
                <p className="text-sm opacity-70">Shaping Future Leaders</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing young minds with values, knowledge, and holistic development since 1995.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Academics", "Admissions", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                info@sarathavidhyalaya.edu
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                123 Education Road, Tamil Nadu, India
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm opacity-60 text-center md:text-left">
              © {new Date().getFullYear()} Saratha Vidhyalaya. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm opacity-60">
              <span>Powered by</span>
              <a 
                href="https://www.redratech.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img 
                  src={redratechLogo} 
                  alt="Redra Tech" 
                  className="h-6 w-auto"
                />
                <span className="font-medium">Redra Tech</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
