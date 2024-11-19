import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

// Icons
import {
  Shield,
  Smartphone,
  Lock,
  Menu,
  X,
  Database,
  Github,
} from "lucide-react";

import logo from "./assets/logo.png";

const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen" id="start">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            to="start"
            smooth={true}
            duration={500}
            className="text-2xl font-bold  cursor-pointer text-emerald-600"
          >
            Radica
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-emerald-600"
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-emerald-600"
            >
              How It Works
            </Link>
            <a
              className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition flex items-center"
              href="https://github.com/RadicaDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="me-2 h-auto" />
              <p>GitHub</p>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute w-full bg-white shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4 py-6">
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-emerald-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="how-it-works"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-emerald-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <a
                  className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition flex items-center"
                  href="https://github.com/RadicaDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="me-2 h-auto" />
                  <p>GitHub</p>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 pt-24 flex flex-col-reverse md:flex-row items-center justify-between"
      >
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Product Authentication with{" "}
            <span className="text-emerald-600">NFC & Blockchain</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            Revolutionize your product authentication using cutting-edge NFC and
            blockchain technology. Protect against counterfeits with unbreakable
            digital verification.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-emerald-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-emerald-700 transition">
              Request Demo
            </button>
            <button className="border border-emerald-600 text-emerald-600 px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-emerald-50 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end"
        >
          <img
            src={logo}
            alt="NFC Authentication"
            className="rounded-xl shadow-2xl max-w-xs h-auto"
          />
        </motion.div>
      </motion.header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Radica?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our innovative solution combines Near Field Communication (NFC) and
            blockchain to create an unprecedented level of product
            authentication.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Shield size={48} className="text-emerald-600" />,
              title: "Unbreakable Security",
              description:
                "Blockchain's immutable ledger ensures absolute authenticity.",
            },
            {
              icon: <Smartphone size={48} className="text-emerald-600" />,
              title: "Easy Verification",
              description:
                "One-tap NFC authentication for instant product validation.",
            },
            {
              icon: <Database size={48} className="text-emerald-600" />,
              title: "Transparent Tracking",
              description:
                "Complete product lifecycle tracking on decentralized networks.",
            },
            {
              icon: <Lock size={48} className="text-emerald-600" />,
              title: "Counterfeit Prevention",
              description:
                "Advanced cryptographic techniques stop forgery attempts.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Authentication Process
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Simple, secure, and seamless product verification in just a few
              steps.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                number: "01",
                title: "NFC Tap",
                description:
                  "User taps their NFC-enabled device on the product's secure tag.",
              },
              {
                number: "02",
                title: "Product Authentication",
                description:
                  "NFC Tag authenticates the product using digital signatures.",
              },
              {
                number: "03",
                title: "Authentication Certificate",
                description:
                  "Verified product details are stored on the blockchain ledger.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Secure Your Products?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Contact our team to implement cutting-edge NFC and blockchain
            authentication for your brand.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-full text-base md:text-xl font-bold hover:bg-emerald-50 transition">
              Coming Soon
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-bold">Radica</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
