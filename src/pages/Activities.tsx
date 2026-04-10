import { Trophy, Music, Award, Calendar } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import sports from "@/assets/sports.jpg";
import cultural from "@/assets/cultural.jpg";

const Activities = () => {
  return (
    <div>
      <PageBanner title="Activities" subtitle="Nurturing talent beyond the classroom" />

      {/* Sports */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img src={sports} alt="Sports Activities" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={600} />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SectionTitle title="Sports Activities" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-4">
                We encourage every student to participate in sports for physical fitness and team building.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Cricket", "Football", "Athletics", "Kabaddi", "Basketball", "Volleyball", "Chess", "Yoga"].map((sport, i) => (
                  <div key={i} className="flex items-center gap-2 bg-card rounded-lg p-3 card-hover">
                    <Trophy className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{sport}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cultural */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2} className="order-2 lg:order-1">
              <SectionTitle title="Cultural Activities" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fostering creativity and cultural appreciation through diverse artistic activities.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Classical Dance", "Music", "Drama", "Art & Craft", "Folk Dance", "Singing", "Debate", "Elocution"].map((activity, i) => (
                  <div key={i} className="flex items-center gap-2 bg-card rounded-lg p-3 card-hover">
                    <Music className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <img src={cultural} alt="Cultural Activities" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={600} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Competitions" subtitle="Building confidence through healthy competition" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Quiz Competitions", desc: "Inter-school and national level quiz" },
              { icon: Trophy, title: "Science Fair", desc: "Innovation and science exhibitions" },
              { icon: Award, title: "Essay Writing", desc: "Developing writing skills" },
              { icon: Trophy, title: "Olympiads", desc: "Math, Science & English Olympiads" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 text-center card-hover">
                  <item.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Annual Events" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Annual Day", desc: "Grand celebration with cultural performances, awards, and parent participation", month: "January" },
              { title: "Sports Day", desc: "Inter-house sports competitions, athletics, and award ceremonies", month: "December" },
              { title: "Independence Day", desc: "Patriotic celebrations with flag hoisting and cultural programs", month: "August" },
              { title: "Science Exhibition", desc: "Student projects and innovations showcased to parents", month: "November" },
            ].map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 card-hover flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center shrink-0">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{event.title}</h3>
                    <p className="text-xs text-accent font-medium mb-1">{event.month}</p>
                    <p className="text-sm text-muted-foreground">{event.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
