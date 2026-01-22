import { motion } from 'framer-motion';
import { Store, TrendingUp, Users, DollarSign, Award, CheckCircle, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Franchise = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    investmentRange: '',
    experience: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        investmentRange: '',
        experience: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '#1 Indian Restaurant Chain',
      description: 'Join the most trusted brand in Indian cuisine across USA and Canada'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven Business Model',
      description: 'Benefit from our successful and tested business operations'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comprehensive Training',
      description: 'Complete training and ongoing support for all franchisees'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Strong ROI',
      description: 'Competitive pricing with excellent return on investment'
    }
  ];

  const requirements = [
    'Minimum investment capital of $300,000 - $500,000',
    'Experience in restaurant or hospitality industry preferred',
    'Passion for Indian cuisine and customer service',
    'Prime location with good foot traffic',
    'Commitment to brand standards and quality',
    'Strong business acumen and leadership skills'
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Inquiry',
      description: 'Submit your franchise application and express your interest'
    },
    {
      step: '02',
      title: 'Discovery Meeting',
      description: 'Meet with our franchise team to discuss opportunities'
    },
    {
      step: '03',
      title: 'Location Selection',
      description: 'We help you find the perfect location for your restaurant'
    },
    {
      step: '04',
      title: 'Training Program',
      description: 'Complete comprehensive training on operations and management'
    },
    {
      step: '05',
      title: 'Grand Opening',
      description: 'Launch your Bawarchi franchise with full support'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-biryani.jpg" 
            alt="Franchise Opportunity" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full mb-6">
              <Store className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-white/80">
                Franchise Opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Own a <span className="text-gradient">Bawarchi</span> Franchise
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Join the #1 Indian restaurant chain and bring authentic flavors to your community. 
              Build a successful business with our proven model and comprehensive support.
            </p>

            <motion.a
              href="mailto:info@bawarchitoronto.com?subject=Franchise Inquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold text-lg"
            >
              <span>Start Your Journey</span>
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Franchise with Us */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient">Bawarchi</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Partnering with Bawarchi means joining a legacy of excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-morphism p-8 rounded-2xl text-center"
              >
                <div className="text-primary-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Simple <span className="text-gradient">Process</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Your journey to franchise ownership in 5 easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-morphism p-6 rounded-2xl text-center h-full">
                  <motion.div
                    className="text-6xl font-bold text-gradient mb-4 opacity-50"
                    whileHover={{ scale: 1.2, opacity: 1 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <motion.div
                      className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Franchise <span className="text-gradient">Requirements</span>
              </h2>
              <p className="text-white/60 text-lg mb-8">
                We're looking for passionate entrepreneurs who share our vision for authentic Indian cuisine
              </p>
              
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/hero-thali.jpg" 
                alt="Restaurant Interior" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Franchise Inquiry Form */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Franchise <span className="text-gradient">Inquiry Form</span>
            </h2>
            <p className="text-white/60 text-lg">
              Fill out the form below and our franchise team will get back to you within 24 hours
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 md:p-12 rounded-3xl space-y-6"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-white/80 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="Toronto"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-white/80 mb-2">
                  State/Province *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                  placeholder="Ontario"
                />
              </div>
            </div>

            {/* Investment & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="investmentRange" className="block text-sm font-medium text-white/80 mb-2">
                  Investment Range *
                </label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                >
                  <option value="">Select Range</option>
                  <option value="300k-400k">$300,000 - $400,000</option>
                  <option value="400k-500k">$400,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-white/80 mb-2">
                  Restaurant Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all"
                >
                  <option value="">Select Experience</option>
                  <option value="none">No Experience</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-all resize-none"
                placeholder="Tell us about your background, location preferences, and why you're interested in a Bawarchi franchise..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 ${
                isSubmitting 
                  ? 'bg-white/10 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/50'
              } transition-all duration-300`}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-center"
              >
                <p className="text-green-400 font-medium">
                  ✓ Thank you! Your franchise inquiry has been submitted successfully. We'll contact you within 24 hours.
                </p>
              </motion.div>
            )}

            <p className="text-white/40 text-sm text-center">
              By submitting this form, you agree to be contacted about franchise opportunities.
            </p>
          </motion.form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism p-12 rounded-3xl"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Franchise Journey?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contact us today to learn more about franchise opportunities and take the first step 
              towards owning your own Bawarchi restaurant.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="mailto:info@bawarchitoronto.com?subject=Franchise Inquiry"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </motion.a>

              <motion.a
                href="tel:647-352-6292"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 glass-morphism rounded-full font-bold hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                <span>647-352-6292</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
