import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Users, Clock, Award, Phone, Mail, MapPin, Star, CheckCircle, Newspaper, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './components/ScrollReveal';
import logo from './components/logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const menuItemVariants = {
    closed: {
      x: -20,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  // Data for Facilities Section with reduced content for visual consistency
  const facilities = [
    {
      title: "GYM",
      description: "At Fitness Cafe, we keep our fitness equipment top-notch for all your needs. Our state-of-the-art facility features the latest treadmills, elliptical trainers, and bikes from leading brands. Regardless of your age or fitness level, we’ll help you own your goals with strength and discipline.",
      results: ["Tone Up", "Super Cardio", "Endurance", "Muscle Definition", "Flat Abs", "Increase Power"]
    },
    {
      title: "BOLLY-FITNESS",
      description: "A fun-filled dance workout to get into shape, stay toned, and work your core. It is a high-energy dance workout that combines aerobic exercises and rhythmic movements.",
      results: ["Burn Fat", "Work On All Muscle", "Chiseled Body", "Super Strong Core", "Agility", "Muscular Endurance"]
    },
    {
      title: "YOGA",
      description: "Yoga is a mind-body workout that combines strengthening and stretching poses with deep breathing and relaxation. It helps in improving your health, calming your mind, and toning muscles.",
      results: ["Catch Some Sexy Moves", "Super Cardio", "Stress Buster", "Improve Co-Ordination", "Tone & Shape Legs, Butt & Hips", "Fat Burn"]
    },
    {
      title: "Sports Conditioning Training",
      description: "Our Sports Conditioning Specialist Program is for anyone interested in programs that help people improve their athletic performance.",
      results: ["Burn Fat", "Work On All Muscle", "Chiseled Body", "Super Strong Core", "Agility", "Muscular Endurance"]
    },
    {
      title: "Power Yoga",
      description: "Power Yoga is characterized by a series of dynamic yoga postures and breathing exercises, performed to result in weight loss.",
      results: ["Flexibility", "Feel Centered & Calm", "Stress Buster", "Control Breathing", "Improve Postures", "Tone Up"]
    },
    {
      title: "Zumba",
      description: "Zumba is a high-energy workout routine that combines Latin American dance moves. It's designed for weight loss, toning, and sculpting the body. No dance experience is needed to have a great time and burn up to 800 calories.",
      results: ["Catch Some Sexy Moves", "Super Cardio", "Stress Buster", "Fat Burn", "Tone & Shape Legs, Butt & Hips", "Flexibility"]
    },
    {
      title: "BOOT-CAMP",
      description: "Get back to basics with a military-style boot camp class. These sessions focus on functional movements like push-ups, squats, sprints, and sit-ups for a killer workout.",
      results: ["Burn Fat", "Work On All Muscle", "Chiseled Body", "Super Strong Core", "Agility", "Muscular Endurance"]
    },
    {
      title: "Cross Functional Training",
      description: "Functional Fitness classes are aimed at building a strong structural foundation for your body. The varied combinations of high-intensity movements improve speed, agility, and core strength.",
      results: ["Burn Fat", "Work On All Muscle", "Chiseled Body", "Super Strong Core", "Agility", "Muscular Endurance"]
    },
    {
      title: "SPINNING CLASSES",
      description: "Our instructors guide you through various workout phases on a bike, including sprints and climbs. You control the resistance to make the pedaling as easy or difficult as you choose.",
      results: ["Burn Fat", "Work On All Muscle", "Chiseled Body", "Super Strong Core", "Agility", "Muscular Endurance"]
    },
    {
      title: "AEROBICS/STEP AEROBICS",
      description: "A form of physical exercise that combines rhythmic aerobic exercises with stretching and strength training routines to improve all elements of fitness.",
      results: ["Burn Fat", "Work On All Muscle", "Chiseled Body", "Super Strong Core", "Agility", "Muscular Endurance"]
    },
    {
      title: "MMA",
      description: "Mixed martial arts (MMA) is a combat sport that includes striking and grappling techniques. It encompasses disciplines from various martial arts and Olympic sports.",
      results: ["Catch Some Sexy Moves", "Super Cardio", "Stress Buster", "Improve Co-Ordination", "Tone & Shape Legs, Butt & Hips", "Fat Burn"]
    },
    {
      title: "Self-Defense",
      description: "Martial arts classes can help you stay safe while getting into great shape. These classes engage your mind and body in a unique way.",
      results: ["Catch Some Sexy Moves", "Super Cardio", "Stress Buster", "Improve Co-Ordination", "Tone & Shape Legs, Butt & Hips", "Fat Burn"]
    },
    {
      title: "TRX",
      description: "TRX class uses a suspension training system that leverages your body weight. You are in control of the resistance for each exercise by adjusting your body position.",
      results: ["Burn Fat", "Work On All Muscle", "Chiseled Body", "Super Strong Core", "Agility", "Muscular Endurance"]
    }
  ];

  // Data for Blog Section (Placeholder)
  const blogPosts = [
    {
      title: "Top 5 Tips for a Stronger Core",
      date: "July 1, 2024",
      excerpt: "Building a strong core is essential for overall fitness. Here are five simple yet effective tips to help you get started...",
      image: "image_71275f.jpg"
    },
    {
      title: "The Ultimate Guide to Pre-Workout Nutrition",
      date: "June 25, 2024",
      excerpt: "What you eat before your workout can significantly impact your performance and results. Learn how to fuel your body correctly...",
      image: "image_7123fc.jpg"
    },
    {
      title: "Why Yoga is More Than Just Stretching",
      date: "June 18, 2024",
      excerpt: "Discover the mental and physical benefits of a regular yoga practice, from improved flexibility to reduced stress and enhanced focus...",
      image: "image_712020.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* This is the logo container that was changed */}
              <div className={`transition-all duration-300 ${
                scrollY > 50 ? '' : ''
              }`}>
                <img
                  src={logo}
                  alt="Fitness Cafe Logo"
                  className={`h-12 w-12 transition-colors duration-300 ${
                    scrollY > 50 ? 'filter grayscale-0' : 'filter grayscale-0'
                  }`}
                />
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                scrollY > 50 ? 'text-slate-800' : 'text-white'
              }`}>
                Fitness Cafe
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Facilities', id: 'facilities' },
                { name: 'Blogs', id: 'blogs' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-300 hover:text-green-500 relative px-4 py-2 rounded-lg ${
                    scrollY > 50 ? 'text-slate-700 hover:bg-green-50' : 'text-white hover:bg-white/10'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                scrollY > 50 ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'About', id: 'about' },
                  { name: 'Services', id: 'services' },
                  { name: 'Facilities', id: 'facilities' },
                  { name: 'Blogs', id: 'blogs' },
                  { name: 'Pricing', id: 'pricing' },
                  { name: 'Contact', id: 'contact' }
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-700 font-medium hover:text-green-600 transition-colors text-left py-2 px-4 rounded-lg hover:bg-green-50"
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Fitness Cafe
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Fitness Meets Community
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('pricing')}
              className="border-2 border-white/80 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                  About <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Fitness Cafe</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl md:text-2xl text-slate-600 mb-16 leading-relaxed max-w-4xl mx-auto">
                  At Fitness Cafe, we believe that fitness is not just about working out—it's about building a community,
                  fostering relationships, and creating a lifestyle that energizes every aspect of your life.
                  Our state-of-the-art facility combines cutting-edge equipment with expert guidance to help you achieve your goals.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Community Focused",
                  description: "Join a supportive community of fitness enthusiasts who motivate each other to reach new heights and celebrate every milestone together."
                },
                {
                  icon: Award,
                  title: "Expert Trainers",
                  description: "Work with certified professionals who are passionate about helping you succeed in your fitness journey with personalized guidance."
                },
                {
                  icon: Clock,
                  title: "Flexible Hours",
                  description: "Open 24/7 to accommodate your busy schedule, because fitness should never be compromised by time constraints."
                }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div
                    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transition-all duration-300 cursor-pointer group h-full"
                    whileHover={{
                      y: -15,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                      scale: 1.02
                    }}
                  >
                    <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">{item.title}</h3>
                    <p className="text-slate-600 text-center leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Services</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of fitness services designed to meet every need and goal.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Personal Training",
                description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level for maximum results.",
                icon: Users
              },
              {
                title: "Group Classes",
                description: "High-energy group workouts including yoga, spinning, HIIT, and dance fitness classes for all skill levels.",
                icon: Dumbbell
              },
              {
                title: "Nutrition Coaching",
                description: "Professional nutrition guidance to complement your fitness routine and optimize results with meal planning.",
                icon: Award
              },
              {
                title: "Strength Training",
                description: "State-of-the-art equipment and expert guidance for building muscle and increasing strength safely.",
                icon: Dumbbell
              },
              {
                title: "Cardio Zone",
                description: "Modern cardio equipment with entertainment systems to make your workouts engaging and enjoyable.",
                icon: Clock
              },
              {
                title: "Recovery Services",
                description: "Massage therapy, sauna, and recovery tools to help you bounce back stronger after intense workouts.",
                icon: Award
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 transition-all duration-300 cursor-pointer group h-full"
                  whileHover={{
                    y: -15,
                    backgroundColor: "rgba(51, 65, 85, 0.8)",
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Our <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Facilities</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Explore our world-class facilities and the diverse range of workouts they support.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {facilities.map((facility, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white h-full p-8 rounded-2xl shadow-lg border border-slate-100 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-[1.02]">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">{facility.title}</h3>
                  <p className="text-slate-600 mb-6">{facility.description}</p>
                  <h4 className="text-lg font-semibold text-green-600 mb-3">Results:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {facility.results.map((result, resIndex) => (
                      <li key={resIndex} className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Blogs Section */}
      <section id="blogs" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Fitness <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Blogs</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Stay motivated and informed with our latest articles on health and fitness.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-sm text-green-400 mb-4">{post.date}</p>
                    <p className="text-slate-300 mb-4 flex-grow">{post.excerpt}</p>
                    <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors mt-auto">
                      Read More <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Choose Your <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Plan</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Flexible pricing options designed to fit your lifestyle and budget. All plans include full gym access.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Monthly",
                price: "₹1500",
                period: "per month",
                savings: null,
                features: [
                  "Full gym access 24/7",
                  "All group fitness classes",
                  "Locker room facilities",
                  "Free Wi-Fi throughout",
                  "Mobile app access",
                  "Basic fitness assessment"
                ],
                popular: false,
                color: "from-slate-600 to-slate-700"
              },
              {
                name: "Quarterly",
                price: "₹4000",
                period: "per 3 months",
                savings: "Save ₹500",
                features: [
                  "Everything in Monthly",
                  "Personal training consultation",
                  "Nutrition guidance session",
                  "Priority class booking",
                  "Guest passes (2 per month)",
                  "Sauna & steam room access"
                ],
                popular: true,
                color: "from-green-600 to-green-700"
              },
              {
                name: "Yearly",
                price: "₹10000",
                period: "per year",
                savings: "Save ₹8000",
                features: [
                  "Everything in Quarterly",
                  "Unlimited guest passes",
                  "Monthly personal training session",
                  "Annual nutrition consultation",
                  "Exclusive member events",
                  "Fitness swag bag"
                ],
                popular: false,
                color: "from-blue-600 to-blue-700"
              }
            ].map((plan, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`relative bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-center flex flex-col items-center transform transition-all duration-300 h-full ${plan.popular ? 'ring-4 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 mb-6">{plan.savings}</p>
                  <div className="text-5xl font-extrabold mb-2 text-slate-900">
                    {plan.price}
                  </div>
                  <p className="text-slate-500 mb-8">{plan.period}</p>
                  <ul className="text-slate-600 space-y-3 text-left w-full flex-grow">
                    {plan.features.map((feature, featIndex) => (
                      <li key={featIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-8 w-full py-3 rounded-full text-white font-bold transition-all duration-300 bg-gradient-to-r ${plan.color} hover:shadow-lg hover:translate-y-[-2px]`}>
                    Choose Plan
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-white text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Members Say</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16">
              Hear from our happy members who have transformed their lives at Fitness Cafe.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={0.3}>
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 flex flex-col items-center shadow-xl hover:scale-[1.02] transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <Star className="h-6 w-6 text-yellow-400 mb-4" />
                <p className="text-slate-300 italic mb-6">"Fitness Cafe has changed my life. The trainers are incredible, and the community is so supportive. I've never felt better!"</p>
                <div className="font-bold text-lg text-white">- Jane Doe</div>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 flex flex-col items-center shadow-xl hover:scale-[1.02] transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <Star className="h-6 w-6 text-yellow-400 mb-4" />
                <p className="text-slate-300 italic mb-6">"The variety of classes is amazing. I never get bored, and I've tried things I never thought I would. Highly recommend!"</p>
                <div className="font-bold text-lg text-white">- John Smith</div>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 flex flex-col items-center shadow-xl hover:scale-[1.02] transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <Star className="h-6 w-6 text-yellow-400 mb-4" />
                <p className="text-slate-300 italic mb-6">"The best gym I've ever joined. Clean, spacious, and the staff is always friendly and helpful. I love coming here."</p>
                <div className="font-bold text-lg text-white">- Sarah Lee</div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Get In <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Touch</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We're here to help you start your fitness journey. Contact us with any questions.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:scale-[1.02] transition-all duration-300">
                <Phone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Phone</h3>
                <p className="text-slate-600">Call us anytime</p>
                <a href="tel:+1234567890" className="block text-green-600 font-semibold mt-2 hover:underline">+91 9535043089 / 9611578950</a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:scale-[1.02] transition-all duration-300">
                <Mail className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600">Send us a message</p>
                <a href="mailto:info@fitnesscafe.com" className="block text-green-600 font-semibold mt-2 hover:underline">support@fitnesscafe.in</a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:scale-[1.02] transition-all duration-300">
                <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Location</h3>
                <p className="text-slate-600">Visit us in person</p>
                <address className="block text-green-600 font-semibold mt-2 not-italic">Builder's Ngv Club, 1st Floor, Koramangala, Bangalore karnataka: 560047</address>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="container mx-auto px-6 text-center md:flex md:justify-between md:items-center">
          <div className="text-lg font-bold mb-4 md:mb-0">Fitness Cafe</div>
          <div className="text-slate-400">© 2024 Fitness Cafe. All rights reserved.</div>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-green-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-green-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;