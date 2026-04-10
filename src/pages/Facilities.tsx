import { Monitor, BookOpen, Bus, Shield, Microscope, Building } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import classroom from "@/assets/classroom.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import library from "@/assets/library.jpg";
import transport from "@/assets/transport.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const facilities = [
  { img: classroom, title: "Smart Classrooms", desc: "Air-conditioned rooms with digital boards and interactive learning tools", icon: Monitor },
  { img: heroCampus, title: "Modern Campus", desc: "Spacious, green campus with state-of-the-art infrastructure", icon: Building },
  { img: scienceLab, title: "Science Laboratory", desc: "Fully equipped physics, chemistry, and biology labs for practical learning", icon: Microscope },
  { img: computerLab, title: "Computer Lab", desc: "Latest computers with high-speed internet for digital education", icon: Monitor },
  { img: library, title: "Library", desc: "Extensive collection of books, journals, and digital resources", icon: BookOpen },
  { img: transport, title: "Transport", desc: "Safe and comfortable school buses covering all major routes", icon: Bus },
];

const Facilities = () => {
  return (
    <div>
      <PageBanner title="Our Facilities" subtitle="World-class infrastructure for quality education" />

      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Infrastructure & Amenities" subtitle="We provide the best facilities for a holistic learning experience" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl overflow-hidden card-hover group h-full">
                  <div className="overflow-hidden h-48">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Safety & Security" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "CCTV Surveillance", desc: "24/7 camera monitoring" },
              { icon: Shield, title: "Secure Campus", desc: "Restricted entry with guards" },
              { icon: Shield, title: "Fire Safety", desc: "Fire extinguishers & drills" },
              { icon: Shield, title: "First Aid", desc: "On-campus medical facility" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-5 text-center card-hover">
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
