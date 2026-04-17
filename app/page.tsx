'use client';

import Image from "next/image";
import { Mail, ExternalLink, ChevronRight, Terminal, Code2, Database, Brain, Globe, Settings, Award, GraduationCap, Calendar, CheckCircle2, FileDown } from "lucide-react";
import { saveMessage } from "@/lib/actions";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skillCategories = [
    { title: "Languages", icon: <Terminal size={18} />, skills: ["Java", "Python", "JavaScript"] },
    { title: "Frontend", icon: <Globe size={18} />, skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { title: "Backend", icon: <Settings size={18} />, skills: ["Node.js", "Flask"] },
    { title: "ML & Data", icon: <Brain size={18} />, skills: ["Scikit-learn", "OpenCV", "Pandas", "NumPy", "Feature Engineering"] },
    { title: "Databases", icon: <Database size={18} />, skills: ["MongoDB", "MySQL"] },
    { title: "Tools", icon: <Code2 size={18} />, skills: ["Git", "GitHub", "Postman", "AWS", "GCP", "ArcGIS"] },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-blue-500/30 font-sans scroll-smooth">
      
      {/* --- STICKY NAVIGATION BAR --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 px-8 py-3 rounded-full flex gap-5 md:gap-8 items-center shadow-2xl w-[95%] max-w-fit">
        {['About', 'Academic Journey', 'Experience', 'Skills', 'Certifications', 'Projects'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:scale-110 whitespace-nowrap"
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        
        {/* --- HERO SECTION (ABOUT) --- */}
        <header id="about" className="mb-32 grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-12 border-b border-zinc-900 pb-20 scroll-mt-32">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-48 w-48 rounded-full border-4 border-zinc-800 ring-4 ring-blue-500/30 bg-zinc-900 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]">
  <Image 
    src="/profile.jpg" 
    alt="Sumedha Chitranshi"
    fill
    className="object-cover"
    priority
  />
</div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Sumedha Chitranshi
            </h1>
            <p className="text-lg text-zinc-400 mt-6 max-w-4xl leading-relaxed">
              Results-driven B.Tech final year student specializing in Computer Science (Data Science) at 
AKTU University with a strong foundation in software engineering, machine 
learning, and full-stack development. Proficient in building scalable applications 
and machine learning models using Python, with hands-on experience in model 
development, data processing, and deploying data-driven solutions. Skilled in 
designing end-to-end features, implementing efficient algorithms, and building 
robust software systems. A proactive problem-solver and collaborative team player 
eager to develop impactful, high-performance technology solutions.
            </p>
          </div>
        </header>

        {/* --- JOURNEY (EDUCATION) SECTION --- */}
        <section id="academic journey" className="mb-32 scroll-mt-32">
          <h6 className="text-xl font-bold uppercase tracking-[0.3em] text-pink-500 mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-pink-500/30" />  Academic Journey
          </h6>
          <div className="space-y-12">
            
            {/* BBDITM */}
    <div className="relative pl-12 group">
      {/* Logo as Marker */}
      <div className="absolute -left-[24px] top-0 h-12 w-12 rounded-xl bg-white border-2 border-zinc-800 p-1 overflow-hidden z-10 group-hover:border-pink-500 transition-colors shadow-xl">
        <Image 
          src="/BBDITM.jpg" 
          alt="BBDITM" 
          fill 
          className="object-contain p-0.5"
        />
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
        <span className="text-zinc-500 font-mono text-sm flex items-center gap-2">
          <Calendar size={14} /> 2022 — Present
        </span>
      </div>
      <p className="text-zinc-500 font-medium">BBDITM, AKTU University</p>
      <p className="text-pink-400 font-medium">Computer Science (Data Science)</p>
    </div>

    {/* SKD Academy */}
    <div className="relative pl-12 group">
      {/* Logo as Marker */}
      <div className="absolute -left-[24px] top-0 h-12 w-12 rounded-xl bg-white border-2 border-zinc-800 p-1 overflow-hidden z-10 group-hover:border-pink-500 transition-colors shadow-xl">
        <Image 
          src="/SKD.jpg" 
          alt="SKD Academy" 
          fill 
          className="object-contain p-0.5"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-white">Senior Secondary Education (ISC)</h3>
        <span className="text-zinc-600 font-mono text-sm flex items-center gap-2">
          <Calendar size={14} /> 2021 — 2022
        </span>
      </div>
      <p className="text-zinc-500 font-medium">SKD Academy</p>
      <div className="flex items-center gap-4 mt-2">
        <p className="text-pink-400 font-medium">PCM + Computer</p>
        <p className="text-pink-400 font-medium">85%</p>
      </div>
    </div>

    {/* St. Mary's */}
    <div className="relative pl-12 group">
      {/* Logo as Marker */}
      <div className="absolute -left-[24px] top-0 h-12 w-12 rounded-xl bg-white border-2 border-zinc-800 p-1 overflow-hidden z-10 group-hover:border-pink-500 transition-colors shadow-xl">
        <Image 
          src="/SMCIC.webp" 
          alt="St. Mary's" 
          fill 
          className="object-contain p-0.5"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-zinc-300">Secondary Education (ICSE)</h3>
        <span className="text-zinc-600 font-mono text-sm flex items-center gap-2">
          <Calendar size={14} /> 2019 — 2020
        </span>
      </div>
      <p className="text-zinc-500 font-medium">St. Mary's Convent Inter College</p>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-pink-400 font-medium">94%</span>
      </div>
    </div>
  </div>
        </section>

{/* --- EXPERIENCE SECTION --- */}
<section id="experience" className="mb-32 scroll-mt-32">
  <h6 className="text-xl font-bold uppercase tracking-[0.3em] text-blue-500 mb-12 flex items-center gap-4">
    <div className="h-px w-12 bg-blue-500/30" /> Professional Experience
  </h6>
  
  <div className="flex flex-col gap-8">
    {/* Full-Time Role */}
    <div className="rounded-3xl border border-zinc-900 bg-zinc-950/30 p-10 hover:bg-zinc-900/20 transition-colors">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Logo Container */}
        <div className="relative h-20 w-20 shrink-0 bg-white rounded-2xl p-1.5 overflow-hidden shadow-xl border-2 border-zinc-800">
          <Image 
            src="/84.png" // Replace with your actual file path
            alt="GeoWGS84" 
            fill 
            className="object-contain p-1"
          />
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">AI Software Engineer</h3>
              <p className="text-blue-400 font-medium text-lg mt-1">GeoWGS84</p>
            </div>
            <p className="text-sm text-zinc-500 font-mono mt-2 md:mt-0 italic">September 2025 — Present</p>
          </div>
          <p className="text-zinc-400 leading-relaxed max-w-6xl">
                Development professional at a leading geospatial technology company, contributing to the design and development of advanced software solutions that integrate satellite, aerial, and drone imagery with AI-driven analytics. Actively involved in building and enhancing a global platform for geospatial data collection, processing, and intelligent analysis. Develop and maintain scalable web applications using React for dynamic front-end interfaces and Flask for robust backend services. Leverage tools such as ArcGIS for efficient spatial data management, visualization, and analysis, enabling real-world geospatial applications and data-driven decision-making.
              </p>
        </div>
      </div>
    </div>

    {/* Intern Role */}
    <div className="rounded-3xl border border-zinc-900 bg-zinc-950/30 p-10 hover:bg-zinc-900/20 transition-colors">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Logo Container */}
        <div className="relative h-20 w-20 shrink-0 bg-white rounded-2xl p-1.5 overflow-hidden shadow-xl border-2 border-zinc-800">
          <Image 
            src="/84.png" // Replace with your actual file path
            alt="GeoWGS84" 
            fill 
            className="object-contain p-1"
          />
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">AI Software Engineer Intern</h3>
              <p className="text-blue-400 font-medium text-lg mt-1">GeoWGS84</p>
            </div>
            <p className="text-sm text-zinc-500 font-mono mt-2 md:mt-0 italic">February 2025 — August 2025</p>
          </div>
          <p className="text-zinc-400 leading-relaxed max-w-6xl">
            Worked as a Development Intern at a leading geospatial technology company, contributing to the development of advanced software solutions that combined satellite, aerial, and drone imagery with AI-powered analytics. Played a key role in enhancing a global platform for geospatial data collection, processing, and intelligent insights. Utilized tools like ArcGIS to manage, visualize, and analyze spatial data, enabling impactful geospatial solutions and informed decision-making.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* --- TECHNICAL SKILLS SECTION --- */}
<section id="skills" className="mb-32 scroll-mt-32">
  <h6 className="text-xl font-bold uppercase tracking-[0.3em] text-emerald-500 mb-12 flex items-center gap-4">
    <div className="h-px w-12 bg-emerald-500/30" /> Technical Skills
  </h6>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {skillCategories.map((cat) => (
      <div 
        key={cat.title} 
        className="group relative p-8 rounded-3xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-emerald-500/50 hover:-translate-y-2"
      >
        {/* Subtle Background Glow on Hover */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-emerald-500 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500 shadow-inner">
              {cat.icon}
            </div>
            <h3 className="font-bold text-sm uppercase tracking-[0.2em] text-zinc-100 group-hover:text-white transition-colors">
              {cat.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {cat.skills.map(skill => (
              <span 
                key={skill} 
                className="px-4 py-2 rounded-xl bg-zinc-900/50 text-xs font-semibold text-zinc-400 border border-zinc-800/50 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="w-8 h-px bg-gradient-to-l from-emerald-500/50 to-transparent" />
        </div>
      </div>
    ))}
  </div>
</section>


        {/* --- CERTIFICATIONS & AWARDS SECTION --- */}
        <section id="certifications" className="mb-32 scroll-mt-32">
          <h6 className=" text-xl font-bold uppercase tracking-[0.3em] text-amber-500 mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-amber-500/30" />  Certifications & Research
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-5 p-6 rounded-3xl border border-zinc-900 bg-zinc-950/50 group hover:border-amber-500/30 transition-all">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Best Research Paper Presentation Award (International Conference of Research Advances in Multidisciplinary Engineering 2026)</h3>
                <p className="text-sm text-zinc-400 mt-1">Maharishi University of Information Technology</p>
                <p className="text-[10px] text-amber-500 mt-2 font-bold uppercase tracking-wider">
                  Paper- EduTrigen: AI Based Examination Management & Evaluation System
                </p>
                <p className="text-sm text-zinc-500 mt-1">April 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-3xl border border-zinc-900 bg-zinc-950/50 group hover:border-amber-500/30 transition-all">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Software Engineering Job Simulation</h3>
                <p className="text-sm text-zinc-500 mt-1"> JP Morgan Chase and Co.</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-3xl border border-zinc-900 bg-zinc-950/50 group hover:border-amber-500/30 transition-all">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Data Analytics Job Simulation</h3>
                <p className="text-sm text-zinc-500 mt-1">Deloitte</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-3xl border border-zinc-900 bg-zinc-950/50 group hover:border-amber-500/30 transition-all">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Data Visualisation - Empowering 
Business with Effective Insights</h3>
                <p className="text-sm text-zinc-500 mt-1">Tata Consultancy Services</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-3xl border border-zinc-900 bg-zinc-950/50 group hover:border-amber-500/30 transition-all">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Full Stack Web Development Workshop</h3>
                <p className="text-sm text-zinc-500 mt-1">SoftPro</p>
              </div>
            </div>
          </div>
        </section>
        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="mb-32 scroll-mt-32">
          <h6 className="text-xl font-bold uppercase tracking-[0.3em] text-purple-500 mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-purple-500/30" /> Featured Projects
          </h6>
          {/* --- PROJECTS SECTION --- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Project 1: Energy Consumption Forecast */}
  <div className="group relative rounded-3xl border border-zinc-900 bg-zinc-950/70 p-10 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
    {/* Background Image (image_5.png) */}
    <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-20 transition-opacity duration-500">
      <Image 
        src="/energy_consumption.png" // Replace with your actual file path
        alt="Energy Consumption Forecast Background"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        priority
      />
    </div>

    {/* Content Area (Glassmorphism overlay) */}
    <div className="relative z-10 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-inner">
          <Brain size={24} />
        </div>
        <span className="text-[10px] font-black bg-zinc-900/80 text-zinc-500 px-3 py-1.5 rounded-full tracking-widest uppercase backdrop-blur-sm">Machine Learning</span>
      </div>
      
      <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-blue-400 transition-colors uppercase">Energy Consumption Forecast</h3>
      
      <p className="text-zinc-300 text-sm leading-relaxed mb-8">
        Developed a machine learning model to predict 
        household energy consumption and associated costs 
        using Python. Performed data preprocessing, feature 
        engineering, and model training with libraries such as 
        Pandas and Scikit-learn to improve prediction 
        accuracy. Implemented model evaluation and 
        visualized energy usage trends to derive insights, 
        highlighting the model’s potential for smart home 
        energy management and data-driven optimization.
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {["Flask", "ReactJS", "scikit-learn", "pandas"].map(tag => (
          <span key={tag} className="text-[9px] font-bold border border-zinc-800 bg-zinc-950/50 px-2 py-1 rounded text-zinc-500 backdrop-blur-sm">{tag}</span>
        ))}
      </div>
    </div>
  </div>
  
  {/* Project 2: EduTrigen */}
  <div className="group relative rounded-3xl border border-zinc-900 bg-zinc-950/70 p-10 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
    {/* Background Image (image_4.png) */}
    <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-20 transition-opacity duration-500">
      <Image 
        src="/edutrigen.jpeg" // Replace with your actual file path
        alt="EduTrigen Background"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Content Area */}
    <div className="relative z-10 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-inner">
          <Brain size={24} />
        </div>
        <span className="text-[10px] font-black bg-zinc-900/80 text-zinc-500 px-3 py-1.5 rounded-full tracking-widest uppercase backdrop-blur-sm">Research Project</span>
      </div>
      
      <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-blue-400 transition-colors uppercase">EduTrigen</h3>
      
      <p className="text-zinc-300 text-sm leading-relaxed mb-8">
        Developed a full-stack AI-powered platform to automate end-to-end academic evaluation, including exam creation, secure student participation, AI-based grading, and analytics. Implemented using Next.js, integrated Machine Learning models for intelligent evaluation, and utilized the Gemini API for generative capabilities. Designed role-based modules (Admin, Faculty, Student) to ensure scalability, usability, and efficient workflow management.
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {["NextJS", "Gemini API", "AI", "Python"].map(tag => (
          <span key={tag} className="text-[9px] font-bold border border-zinc-800 bg-zinc-950/50 px-2 py-1 rounded text-zinc-500 backdrop-blur-sm">{tag}</span>
        ))}
      </div>
    </div>
  </div>

  {/* Project 3: Virtual Assistant */}
  <div className="group relative rounded-3xl border border-zinc-900 bg-zinc-950/70 p-10 hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl">
    {/* Background Image (image_6.png) */}
    <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-20 transition-opacity duration-500">
      <Image 
        src="/virtualassisstant.png" // Replace with your actual file path
        alt="Virtual Assistant Background"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Content Area */}
    <div className="relative z-10 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
          <Globe size={24} />
        </div>
        <span className="text-[10px] font-black bg-zinc-900/80 text-zinc-500 px-3 py-1.5 rounded-full tracking-widest uppercase backdrop-blur-sm">Full-Stack MERN-Gemini API</span>
      </div>
      
      <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-emerald-400 transition-colors uppercase">Virtual Assistant</h3>
      
      <p className="text-zinc-300 text-sm leading-relaxed mb-8 max-w-7xl">
        Developed a customizable AI assistant application with voice 
        interaction and AI-powered responses. Implemented secure 
        user authentication using JWT and bcryptjs, enabling safe 
        account management and access control. Built 
        personalization features allowing users to customize the 
        assistant’s name and upload a unique assistant image using 
        Cloudinary and Multer. Developed the full-stack platform using 
        React, Node.js/Express, and MongoDB for scalable data 
        management.
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {["React.js", "Node.js", "MongoDB", "Cloudinary"].map(tag => (
          <span key={tag} className="text-[9px] font-bold border border-zinc-800 bg-zinc-950/50 px-2 py-1 rounded text-zinc-500 backdrop-blur-sm">{tag}</span>
        ))}
      </div>
    </div>
  </div>
</div>
        </section>

        {/* --- CONTACT ME SECTION --- */}
        <section id="contact" className="mb-32 scroll-mt-32">
          <h6 className="text-xl font-bold uppercase tracking-[0.3em] text-cyan-500 mb-12 flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-500/30" /> Get In Touch
          </h6>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-4xl font-black tracking-tight mb-6">Let's build something <span className="text-cyan-400">great</span> together.</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                I am currently open to new opportunities and collaborations in <span className="text-white">AI Engineering</span> and <span className="text-white">Data Science</span>. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800"><Mail size={18} /></div>
                  <span className="text-sm font-medium">sumedhachitranshi1909@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800"><Globe size={18} /></div>
                  <span className="text-sm font-medium">Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center md:justify-start">
  <a 
    href="/SumedhaResume.pdf" // Ensure this file is in your /public folder
    download
    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
  >
    <FileDown size={18} />
    Download Resume
  </a>
</div>
            </div>

            {/* Contact Form */}
            <form 
              action={async (formData) => {
                const res = await saveMessage(formData);
                if (res.success) {
                  alert("Thank you Sumedha! Message received.");
                } else {
                  alert("Something went wrong. Please try again.");
                }
              }}
              className="p-8 rounded-3xl border border-zinc-900 bg-zinc-950/50 flex flex-col gap-4"
            >
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Your Name</label>
                <input type="text" name="name" required placeholder="John Doe" className="w-full mt-2 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                <input type="email" name="email" required placeholder="john@example.com" className="w-full mt-2 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                <textarea name="message" required rows={4} placeholder="Hey, I'd love to talk about..." className="w-full mt-2 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500 transition-colors resize-none" />
              </div>
              <button type="submit" className="mt-4 p-4 rounded-2xl bg-cyan-600 text-black font-black uppercase tracking-widest hover:bg-cyan-400 transition-all active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest gap-4">
          <p>© 2026 Sumedha Chitranshi </p>
          <p className="lowercase font-medium">sumedhachitranshi1909@gmail.com</p>
          <div className="flex gap-4">
  <a 
    href="https://www.linkedin.com/in/sumedha-chitranshi" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-white transition-colors"
  >
    LinkedIn
  </a>
</div>
        </footer>
      </div>
    </main>
  );
}