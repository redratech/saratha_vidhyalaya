import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Award, Users, Shield, BookOpen, GraduationCap, Heart, Lightbulb, Monitor, Trophy, Phone, MapPin, Mail, Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import campusFront from "@/assets/campus-front.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import sports from "@/assets/sports.jpg";
import cultural from "@/assets/cultural.jpg";
import classroom from "@/assets/classroom.jpg";

const Index = () => {
  const testimonials = [
    { name: "Mrs. Lakshmi Devi", text: "My child has shown tremendous growth academically and personally. The teachers are truly dedicated.", rating: 5 },
    { name: "Mr. Rajesh Kumar", text: "The discipline and values taught at Saratha Vidhyalaya have shaped my daughter into a confident individual.", rating: 5 },
    { name: "Mrs. Priya Sharma", text: "Excellent infrastructure and caring environment. I highly recommend this school to every parent.", rating: 5 },
    { name: "Dr. Anand Patel", text: "The school's focus on holistic development has helped my son excel in both academics and sports.", rating: 5 },
    { name: "Mrs. Sneha Reddy", text: "I'm impressed by the individual attention given to each student. My daughter loves going to school every day.", rating: 5 },
    { name: "Mr. Karthik Subramanian", text: "The smart classes and modern teaching methods make learning engaging and effective for children.", rating: 5 },
  ];

  // Create duplicated array for infinite scroll effect
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={campusFront} alt="Saratha Vidhyalaya Campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 page-banner-overlay" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-primary-foreground"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">
              Saratha Vidhyalaya
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
              Shaping Future Leaders with Values & Knowledge
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="inline-flex items-center px-8 py-3 rounded-lg accent-gradient text-accent-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow">
                Apply Now
              </Link>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-primary-foreground/80 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="-mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "100% Results", desc: "Consistently excellent academic performance", color: "bg-primary" },
              { icon: Users, title: "Experienced Teachers", desc: "Highly qualified and dedicated faculty", color: "accent-gradient" },
              { icon: Shield, title: "Safe Campus", desc: "Secure environment with CCTV surveillance", color: "bg-primary" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-2xl p-7 card-hover flex items-start gap-5 card-accent-border">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 icon-ring`}>
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img src={heroCampus} alt="Our Campus" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={450} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SectionTitle title="Welcome to Saratha Vidhyalaya" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established with a vision to provide quality education, Saratha Vidhyalaya has been nurturing young minds for over two decades. Our school blends traditional values with modern teaching methodologies to prepare students for a bright future.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe every child is unique and deserves the best opportunities to discover their potential and grow into responsible citizens.
              </p>
              <Link to="/about" className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                Read More
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Academics Preview */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Our Academic Programs" subtitle="Comprehensive education from Pre-KG to Higher Secondary" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Pre KG", desc: "Playful learning for tiny tots", gradient: "from-pink-500 to-rose-400" },
              { icon: BookOpen, title: "Primary", desc: "Strong foundation (Grades 1-5)", gradient: "from-blue-500 to-cyan-400" },
              { icon: Lightbulb, title: "Middle School", desc: "Critical thinking (Grades 6-8)", gradient: "from-amber-500 to-yellow-400" },
              { icon: GraduationCap, title: "High School", desc: "Board excellence (Grades 9-12)", gradient: "from-emerald-500 to-teal-400" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-7 text-center card-hover group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-5 icon-ring group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Why Choose Us" subtitle="What sets Saratha Vidhyalaya apart" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Discipline", desc: "Strong moral values and disciplined environment", num: "01" },
              { icon: Users, title: "Individual Attention", desc: "Small class sizes for personalized learning", num: "02" },
              { icon: Monitor, title: "Smart Classes", desc: "Technology-driven interactive learning", num: "03" },
              { icon: Star, title: "Holistic Development", desc: "Academic, sports, and cultural excellence", num: "04" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl p-7 text-center card-hover bg-card group relative overflow-hidden">
                  <span className="absolute top-3 right-4 text-4xl font-heading font-extrabold text-primary/5 group-hover:text-primary/10 transition-colors">{item.num}</span>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Beyond Academics" subtitle="Fostering talent through diverse activities" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: sports, title: "Sports", desc: "Athletics, cricket, football, and more" },
              { img: cultural, title: "Cultural Events", desc: "Dance, music, drama, and art" },
              { img: classroom, title: "Competitions", desc: "Quiz, debates, science fairs" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-2xl overflow-hidden card-hover group">
                  <div className="overflow-hidden h-52 relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-heading font-bold text-lg text-white">{item.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="What Parents Say" subtitle="Trusted by families across the community" />
          </AnimatedSection>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-slow">
              {infiniteTestimonials.map((item, i) => (
                <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-card rounded-2xl p-7 card-hover relative overflow-hidden h-full mx-2">
                    <div className="absolute top-5 right-5 text-5xl font-serif text-primary/10 leading-none">"</div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: item.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic mb-5 leading-relaxed relative z-10">"{item.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{item.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-heading font-bold text-foreground text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Parent</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient" />
        <div className="relative z-10 container mx-auto px-4 text-center text-accent-foreground">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Admissions Open 2025-26</h2>
            <p className="text-lg mb-8 opacity-90">Secure your child's future with quality education</p>
            <Link to="/admissions" className="inline-flex items-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg">
              Apply Now
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Get In Touch" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Phone, title: "Call Us", detail: "+91 98765 43210" },
              { icon: MapPin, title: "Visit Us", detail: "123 Education Road, Tamil Nadu" },
              { icon: Mail, title: "Email Us", detail: "info@sarathavidhyalaya.edu" },
            ].map((item, i) => (
               <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-7 bg-card rounded-2xl card-hover">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 icon-ring">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
