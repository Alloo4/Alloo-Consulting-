
import React, { useState } from 'react';
import { 
  HERO_CONTENT, 
  PROBLEM_SECTION, 
  MENTOR_CONTENT, 
  BENEFITS, 
  TESTIMONIALS, 
  THREE_STEP_PLAN, 
  FEATURES, 
  FAQS,
  PROJECTS
} from './constants';
import { Step, Benefit, Testimonial, FAQ, Feature, Project } from './types';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="#" className="text-2xl font-black text-indigo-600 tracking-tighter">ALLOO.</a>
      <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
        <a href="#problem" className="hover:text-indigo-600 transition">Solution</a>
        <a href="#portfolio" className="hover:text-indigo-600 transition">Portfolio</a>
        <a href="#mentor" className="hover:text-indigo-600 transition">About</a>
        <a href="#process" className="hover:text-indigo-600 transition">Process</a>
        <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
      </div>
      <a 
        href="#contact" 
        className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
      >
        Start Winning
      </a>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">{HERO_CONTENT.eyebrow}</p>
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
          {HERO_CONTENT.headline}
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
          {HERO_CONTENT.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href="#contact"
            className="inline-block text-center bg-indigo-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-indigo-700 transition shadow-xl shadow-indigo-200 scale-105 active:scale-100"
          >
            {HERO_CONTENT.cta}
          </a>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/id/${i+10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />)}
             </div>
             <p className="text-sm text-slate-500 font-medium">{HERO_CONTENT.socialProof}</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-2xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
          className="relative rounded-3xl shadow-2xl border border-white" 
          alt="High-performance business growth" 
        />
      </div>
    </div>
  </section>
);

const Problem: React.FC = () => (
  <section id="problem" className="py-24 bg-slate-900 text-white px-4 scroll-mt-20">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">{PROBLEM_SECTION.headline}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROBLEM_SECTION.symptoms.map((symptom, idx) => (
          <div key={idx} className="flex items-start gap-4 p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 transition">
            <span className="text-red-500 text-2xl font-bold">✕</span>
            <p className="text-lg text-slate-300 text-left font-medium">{symptom}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Mentor: React.FC = () => (
  <section id="mentor" className="py-24 px-4 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-indigo-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
          <img 
            src="input_file_0.png" 
            className="w-full h-full object-cover object-top" 
            alt="Darryl Alloo - Alloo Consulting" 
          />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Meet Your Growth Partner</h2>
        <p className="text-xl text-slate-600 italic mb-6 leading-relaxed border-l-4 border-indigo-500 pl-6">
          "{MENTOR_CONTENT.empathy}"
        </p>
        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          {MENTOR_CONTENT.authority}
        </p>
        <p className="text-indigo-600 font-bold text-2xl">
          {MENTOR_CONTENT.personalTouch}
        </p>
      </div>
    </div>
  </section>
);

const Benefits: React.FC = () => (
  <section id="benefits" className="py-24 bg-slate-50 px-4 scroll-mt-20">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16">The Transformation You'll Experience</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {BENEFITS.map((benefit: Benefit, idx: number) => (
          <div key={idx} className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">{benefit.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-slate-600 text-lg">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio: React.FC = () => (
  <section id="portfolio" className="py-24 px-4 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Proven Systems. Guaranteed Results.</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We don't just build websites; we deliver measurable business outcomes across continents.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {PROJECTS.map((project: Project, idx: number) => (
          <div key={idx} className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={project.title} 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{project.title}</h3>
              <p className="text-slate-600 mb-6 flex-1">
                {project.description}
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <p className="text-indigo-900 font-bold text-sm">THE RESULT:</p>
                <p className="text-indigo-800 text-lg font-medium">{project.result}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                View Case Study <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="py-24 px-4 overflow-hidden bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">What Business Owners Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t: Testimonial, idx: number) => (
          <div key={idx} className="p-8 bg-white rounded-3xl relative border border-slate-100">
            <div className="text-6xl text-indigo-100 absolute top-4 left-4 font-serif">“</div>
            <p className="text-xl text-slate-800 mb-8 relative z-10 font-medium">
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <img src={t.image} className="w-14 h-14 rounded-full object-cover" alt={t.name} />
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500 font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process: React.FC = () => (
  <section id="process" className="py-24 bg-indigo-600 text-white px-4 scroll-mt-20">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16">The 3-Step Success Path</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-white/20 z-0"></div>
        {THREE_STEP_PLAN.map((step: Step, idx: number) => (
          <div key={idx} className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-white text-indigo-600 rounded-full flex items-center justify-center text-3xl font-black mb-8 shadow-2xl">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-indigo-100 text-lg px-4">{step.description}</p>
          </div>
        ))}
      </div>
      <a 
        href="#contact"
        className="inline-block mt-16 bg-white text-indigo-600 px-10 py-4 rounded-xl text-xl font-bold hover:bg-slate-100 transition shadow-xl"
      >
        Scale Now
      </a>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section className="py-24 bg-white px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-slate-500">The Growth Foundation</h2>
      <p className="text-center text-slate-400 mb-16 uppercase tracking-widest text-sm font-bold">Standard in all our websites</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {FEATURES.map((f: Feature, idx: number) => (
          <div key={idx} className="flex flex-col items-center gap-3 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition">
            <span className="text-3xl">{f.icon}</span>
            <span className="font-bold text-slate-700 text-center">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQs: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Answering Your Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq: FAQ, idx: number) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-bold text-lg flex justify-between items-center hover:bg-slate-50 transition"
              >
                {faq.question}
                <span className="text-indigo-600 text-2xl">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="p-6 pt-0 text-slate-600 text-lg border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA: React.FC = () => (
  <section id="contact" className="py-32 bg-slate-900 text-white px-4 relative overflow-hidden scroll-mt-20">
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
        Ready to scale your business and guarantee 5X ROI?
      </h2>
      <p className="text-xl text-slate-400 mb-12">
        Book your free 30-minute technical audit. No pressure, just actionable value.
      </p>
      <button className="bg-indigo-600 text-white px-12 py-6 rounded-2xl text-2xl font-black hover:bg-indigo-700 transition shadow-2xl shadow-indigo-500/50 scale-105 active:scale-100">
        Start Winning Now
      </button>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 bg-white border-t border-slate-200 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <a href="#" className="text-xl font-black text-indigo-600 tracking-tighter">ALLOO.</a>
      <p className="text-slate-500 text-sm font-medium">© 2026 Alloo Consulting. Built for results.</p>
      <div className="flex gap-6 text-slate-400">
        <a href="https://www.linkedin.com/in/darryl-alloo-86149838b" target="_blank" rel="noopener" className="hover:text-indigo-600 transition font-bold">LinkedIn</a>
        <a href="https://github.com/Alloo4" target="_blank" rel="noopener" className="hover:text-indigo-600 transition font-bold">GitHub</a>
        <a href="https://x.com/alloo04" target="_blank" rel="noopener" className="hover:text-indigo-600 transition font-bold">Twitter</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Mentor />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <Process />
      <Features />
      <FAQs />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
