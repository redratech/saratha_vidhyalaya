import { Eye, Target, Heart, Award, BookOpen, Users, Mail, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import principal from "@/assets/principal.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/classroom.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";

const About = () => {
  return (
    <div>
      <PageBanner title="About Us" subtitle="Learn about our legacy and values" />

      {/* Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img src={heroCampus} alt="School Campus" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={450} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SectionTitle title="Our Story" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1995, Saratha Vidhyalaya has been a beacon of quality education in the community. What started as a small school with a handful of students has now grown into a premier educational institution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder envisioned a school that would blend academic rigor with character development, creating well-rounded individuals prepared to meet the challenges of the modern world.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card rounded-xl p-8 card-hover h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution that empowers students to become responsible global citizens with strong values, critical thinking skills, and a passion for lifelong learning.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-card rounded-xl p-8 card-hover h-full">
                <div className="w-14 h-14 rounded-lg accent-gradient flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing and inclusive environment that fosters academic excellence, character development, and creative expression, preparing students to lead meaningful lives.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Our Core Values" subtitle="The foundation of everything we do" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Heart, 
                title: "Compassion", 
                desc: "Kindness and empathy in all interactions",
                gradient: "from-pink-500 to-rose-400",
                detail: "We teach students to care for others and show empathy in their daily lives."
              },
              { 
                icon: Award, 
                title: "Excellence", 
                desc: "Striving for the best in everything",
                gradient: "from-amber-500 to-orange-400",
                detail: "We encourage students to pursue excellence in academics and personal growth."
              },
              { 
                icon: BookOpen, 
                title: "Integrity", 
                desc: "Honesty and strong moral principles",
                gradient: "from-blue-500 to-indigo-400",
                detail: "We instill honesty and ethical behavior as core character traits."
              },
              { 
                icon: Users, 
                title: "Respect", 
                desc: "Valuing every individual equally",
                gradient: "from-emerald-500 to-teal-400",
                detail: "We foster an environment of mutual respect among students and staff."
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden card-hover group relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                  <div className="p-7">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-5 icon-ring group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 text-center">{item.title}</h3>
                    <p className="text-sm text-muted-foreground text-center mb-3 leading-relaxed">{item.desc}</p>
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-xs text-muted-foreground text-center italic">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Principal's Message" />
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-xl p-8 card-hover flex flex-col md:flex-row gap-8 items-center">
                <img src={principal} alt="Principal" className="w-40 h-40 rounded-full object-cover shadow-lg shrink-0" loading="lazy" />
                <div>
                  <p className="text-muted-foreground leading-relaxed italic mb-4">
                    "At Saratha Vidhyalaya, we believe education is not just about academics — it's about building character, instilling values, and nurturing the whole child. Every student who walks through our doors is given the tools to succeed in life."
                  </p>
                  <p className="font-heading font-semibold text-foreground">Mr. S. Ramachandran</p>
                  <p className="text-sm text-muted-foreground">Principal, Saratha Vidhyalaya</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Our Faculty" subtitle="Dedicated educators shaping young minds" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Mrs. Meena Krishnan", 
                subject: "Mathematics", 
                experience: "15+ years",
                email: "meena.k@saratha.edu",
                gender: "female",
                initials: "MK"
              },
              { 
                name: "Mr. Suresh Prasad", 
                subject: "Science", 
                experience: "12+ years",
                email: "suresh.p@saratha.edu",
                gender: "male",
                initials: "SP"
              },
              { 
                name: "Mrs. Anitha Rajan", 
                subject: "English", 
                experience: "18+ years",
                email: "anitha.r@saratha.edu",
                gender: "female",
                initials: "AR"
              },
              { 
                name: "Mr. Karthik Velmurugan", 
                subject: "Social Studies", 
                experience: "10+ years",
                email: "karthik.v@saratha.edu",
                gender: "male",
                initials: "KV"
              },
            ].map((teacher, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 card-hover group">
                  <div className="text-center mb-5">
                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${teacher.gender === 'female' ? 'from-pink-100 to-rose-100' : 'from-blue-100 to-indigo-100'} flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg`}>
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${teacher.gender === 'female' ? 'from-pink-200 to-rose-200' : 'from-blue-200 to-indigo-200'} flex items-center justify-center`}>
                        <span className={`text-3xl font-heading font-bold ${teacher.gender === 'female' ? 'text-rose-600' : 'text-blue-600'}`}>{teacher.initials}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${teacher.gender === 'female' ? 'bg-pink-400' : 'bg-blue-400'}`} />
                      <span className={`text-xs font-medium ${teacher.gender === 'female' ? 'text-pink-600' : 'text-blue-600'}`}>{teacher.experience}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-heading font-bold text-foreground mb-1">{teacher.name}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{teacher.subject}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span className="truncate">{teacher.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Our Achievements" />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "100%", label: "Board Results" },
              { number: "25+", label: "Years of Excellence" },
              { number: "50+", label: "Awards Won" },
              { number: "5000+", label: "Alumni Network" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-hover">
                  <p className="text-3xl font-heading font-bold text-primary">{item.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
