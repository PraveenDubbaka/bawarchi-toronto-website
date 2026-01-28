import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img 
                src={`${import.meta.env.BASE_URL}images/bawarchi-logo.png`}
                alt="Bawarchi Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-2xl font-display font-bold">
              <span className="text-gradient">Bawarchi</span>
              <span className="text-primary-400 ml-2">Toronto</span>
            </h3>
            <p className="text-primary-400 text-sm font-semibold">
              Scarborough, ON
            </p>
            <p className="text-white/60 text-sm">
              #1 Indian Restaurant Chain in USA, Now Open in Canada, Toronto
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <Link to="/" className="block hover:text-primary-400 transition-colors">Home</Link>
              <Link to="/menu" className="block hover:text-primary-400 transition-colors">Menu</Link>
              <Link to="/catering" className="block hover:text-primary-400 transition-colors">Catering</Link>
              <Link to="/promotions" className="block hover:text-primary-400 transition-colors">Promotions</Link>
              <Link to="/franchise" className="block hover:text-primary-400 transition-colors">Franchise</Link>
              <Link to="/contact" className="block hover:text-primary-400 transition-colors">Contact</Link>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-white/60 text-sm">
              <a href="https://maps.google.com/?q=1949+Kennedy+Rd,+Scarborough,+ON" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-2 hover:text-primary-400 transition-colors">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>1949 Kennedy Rd, Scarborough, ON - M1P 2L9</span>
              </a>
              <a href="tel:647-352-6292" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>647-352-6292</span>
              </a>
              <a href="mailto:info@bawarchitoronto.com" className="flex items-center space-x-2 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@bawarchitoronto.com</span>
              </a>
            </div>
          </motion.div>

          {/* Social & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Bawarchi-Toronto-1744595715610061/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary-500/20 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/BawarchiToronto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary-500/20 hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bawarchitoronto/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary-500/20 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm"
        >
          <p>© {currentYear} Bawarchi Biryanis. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
