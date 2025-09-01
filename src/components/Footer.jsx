import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Gavel,
  Heart
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
  ];

  const footerLinks = {
    "Quick Links": [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Active Auctions", href: "/auctions" },
      { name: "About Us", href: "/about" },
      { name: "FAQs", href: "/faq" }
    ],
    "Support": [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 border-t border-gray-700/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.02),transparent)]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
                  <Gavel size={32} className="text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  UltaAuction
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                The most innovative auction platform where strategy meets opportunity. 
                Win premium products at incredible prices through our unique bidding system.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} className="text-yellow-400" />
                  <span>support@ultaauction.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={18} className="text-yellow-400" />
                  <span>+91 1800-123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} className="text-yellow-400" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
            
            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-xl font-bold text-white">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                <span>&copy; {currentYear} UltaAuction. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <div className="hidden sm:flex items-center gap-1">
                  <span>Made with</span>
                  <Heart size={16} className="text-red-400 animate-pulse" />
                  <span>in India</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-1">
                <span className="text-gray-500 text-sm mr-4">Follow us:</span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                    >
                      <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-700/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>RBI Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span>Fair Play Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;