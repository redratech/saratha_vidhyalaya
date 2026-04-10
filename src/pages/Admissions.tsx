import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, FileText, ClipboardList } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    classApplying: "",
    parentName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.studentName || !form.dob || !form.classApplying || !form.parentName || !form.phone) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      toast({ title: "Please enter a valid 10-digit phone number", variant: "destructive" });
      return;
    }
    toast({ title: "Application Submitted!", description: "We will contact you shortly." });
    setForm({ studentName: "", dob: "", classApplying: "", parentName: "", phone: "" });
  };

  return (
    <div>
      <PageBanner title="Admissions" subtitle="Join the Saratha Vidhyalaya family" />

      {/* Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Admission Overview" subtitle="We welcome students from Pre-KG to Grade 12" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Classes Open", desc: "Pre-KG, LKG, UKG, Grades 1-12" },
              { title: "Age Eligibility", desc: "Pre-KG: 3+ years, LKG: 4+ years" },
              { title: "Academic Year", desc: "June 2025 - April 2026" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 text-center card-hover border border-border">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionTitle title="Admission Process" />
          </AnimatedSection>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto">
            {[
              { step: "1", title: "Fill Form", desc: "Complete the application form below", icon: ClipboardList },
              { step: "2", title: "Visit School", desc: "Tour the campus and meet faculty", icon: CheckCircle },
              { step: "3", title: "Confirm", desc: "Submit documents and confirm admission", icon: FileText },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="flex-1">
                <div className="bg-card rounded-xl p-6 text-center card-hover relative">
                  <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent-foreground font-heading font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <SectionTitle title="Application Form" subtitle="Fill in the details to begin the admission process" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 card-hover space-y-5">
              {[
                { label: "Student Name", key: "studentName" as const, type: "text", placeholder: "Enter student's full name" },
                { label: "Date of Birth", key: "dob" as const, type: "date", placeholder: "" },
                { label: "Class Applying For", key: "classApplying" as const, type: "text", placeholder: "e.g., Pre-KG, Grade 1" },
                { label: "Parent/Guardian Name", key: "parentName" as const, type: "text", placeholder: "Enter parent's name" },
                { label: "Phone Number", key: "phone" as const, type: "tel", placeholder: "10-digit mobile number" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    maxLength={field.key === "phone" ? 10 : 100}
                  />
                </div>
              ))}
              <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
                Submit Application
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <SectionTitle title="Documents Required" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-card rounded-xl p-6 card-hover">
              <ul className="space-y-3">
                {[
                  "Birth Certificate (original & copy)",
                  "Previous School Transfer Certificate",
                  "Report Card / Mark Sheet",
                  "4 Passport-size Photographs",
                  "Aadhar Card (Student & Parent)",
                  "Community Certificate",
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <FileText className="h-4 w-4 text-primary shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
