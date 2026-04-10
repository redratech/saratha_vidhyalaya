import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import heroCampus from "@/assets/hero-campus.jpg";
import campusFront from "@/assets/campus-front.jpg";
import classroom from "@/assets/classroom.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";
import cultural from "@/assets/cultural.jpg";
import transport from "@/assets/transport.jpg";

const categories = ["All", "Campus", "Events", "Students", "Activities"];

const images = [
  { src: heroCampus, category: "Campus", alt: "School Campus" },
  { src: campusFront, category: "Campus", alt: "Campus Front View" },
  { src: classroom, category: "Students", alt: "Classroom" },
  { src: scienceLab, category: "Students", alt: "Science Lab" },
  { src: computerLab, category: "Students", alt: "Computer Lab" },
  { src: library, category: "Students", alt: "Library" },
  { src: sports, category: "Activities", alt: "Sports" },
  { src: cultural, category: "Events", alt: "Cultural Event" },
  { src: transport, category: "Campus", alt: "School Transport" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      <PageBanner title="Gallery" subtitle="A glimpse into life at Saratha Vidhyalaya" />

      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Photo Gallery" />
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={`${img.alt}-${i}`} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden group card-hover">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
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

export default Gallery;
