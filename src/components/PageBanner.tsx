import { motion } from "framer-motion";
import heroCampus from "@/assets/hero-campus.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img
        src={heroCampus}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 page-banner-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center text-primary-foreground"
      >
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-lg opacity-90">{subtitle}</p>}
      </motion.div>
    </section>
  );
};

export default PageBanner;
