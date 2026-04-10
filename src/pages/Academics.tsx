import { BookOpen, Monitor, FlaskConical, Award, GraduationCap, Lightbulb, PenTool, Calculator } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import classroom from "@/assets/classroom.jpg";

const Academics = () => {
  return (
    <div>
      <PageBanner title="Academics" subtitle="Excellence in education at every level" />

      {/* Curriculum */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Curriculum Structure" subtitle="Comprehensive programs designed for every stage of learning" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌱", title: "Pre KG", grades: "Ages 3-4", desc: "Play-based learning, sensory activities, social skills development" },
              { icon: "📚", title: "Primary School", grades: "Grades 1-5", desc: "Building strong fundamentals in literacy, numeracy, and science" },
              { icon: "💡", title: "Middle School", grades: "Grades 6-8", desc: "Critical thinking, analytical skills, and subject specialization" },
              { icon: "🎓", title: "High School", grades: "Grades 9-12", desc: "Board exam preparation, career guidance, and advanced studies" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-hover border border-border h-full">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{item.grades}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionTitle title="Teaching Methodology" centered={false} />
              <div className="space-y-4">
                {[
                  { icon: Monitor, title: "Smart Classes", desc: "Interactive digital boards and multimedia learning resources" },
                  { icon: Lightbulb, title: "Activity-Based Learning", desc: "Hands-on experiments, projects, and real-world applications" },
                  { icon: FlaskConical, title: "Lab Practicals", desc: "Well-equipped labs for science and computer experiments" },
                  { icon: BookOpen, title: "Personalized Learning", desc: "Tailored teaching methods to suit individual student needs" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-card rounded-lg p-4 card-hover">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img src={classroom} alt="Smart Classroom" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={600} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Subjects Offered" />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Calculator, name: "Mathematics" },
              { icon: FlaskConical, name: "Science" },
              { icon: BookOpen, name: "English" },
              { icon: PenTool, name: "Tamil" },
              { icon: GraduationCap, name: "Social Studies" },
              { icon: Monitor, name: "Computer Science" },
              { icon: Award, name: "Physical Education" },
              { icon: Lightbulb, name: "General Knowledge" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-card rounded-lg p-3 card-hover">
                  <item.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Exam & Achievements */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card rounded-xl p-8 card-hover h-full">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Examination System</h3>
                <ul className="space-y-3">
                  {["Quarterly Assessments", "Half-Yearly Examinations", "Annual Board Exams", "Continuous Internal Assessment", "Practical Examinations"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full accent-gradient shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-card rounded-xl p-8 card-hover h-full">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Academic Achievements</h3>
                <ul className="space-y-3">
                  {["100% pass rate in board exams", "State-level toppers every year", "District merit list selections", "National scholarship winners", "Olympiad medal winners"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Award className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
