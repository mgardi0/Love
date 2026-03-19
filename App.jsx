import React, { useState, useEffect, useRef } from 'react';
import { Heart, Calendar, MapPin, Mail, ChevronDown, Music, Camera, Share2, Play, Pause } from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Handle scroll for navbar and reveal animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['story', 'gallery', 'details', 'rsvp'];
      const newVisible = { ...isVisible };
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            newVisible[id] = true;
          }
        }
      });
      setIsVisible(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Toggle Music Function
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Floating hearts background component
  const FloatingHearts = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
          >
            <Heart size={16 + Math.random() * 24} fill="currentColor" className="text-pink-300" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-rose-200">
      
      {/* Background Audio Element */}
      {/* تکایە لێرەدا پاشگری فایلەکە وەک .mp3 یان .wav بنووسە وە بەستەری گێت هەب دابنێ */}
      <audio 
        ref={audioRef} 
        src="YOUR_GITHUB_RAW_LINK_HERE/m_gardi0-٢٠٢٦٠٣١٩-0001.mp3" 
        loop 
      />

      {/* Custom Global Styles for Animations and Custom Font */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap');
        
        /* تکایە لێرەدا بەستەری فۆنتەکەی گێت هەب دابنێ (Raw link) */
        @font-face {
          font-family: 'NRT';
          src: url('YOUR_GITHUB_RAW_LINK_HERE/NRT-Reg.ttf') format('truetype');
        }
        
        body { font-family: 'Inter', sans-serif; }
        .kurdish-font { font-family: 'NRT', sans-serif; direction: rtl; }
        .serif { font-family: 'Playfair Display', serif; }

        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.2; }
          80% { opacity: 0.2; }
          100% { transform: translateY(-1000px) rotate(360deg); opacity: 0; }
        }

        .fluid-gradient {
          background: linear-gradient(-45deg, #fbcfe8, #be123c, #7e22ce, #db2777);
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center ${scrolled ? 'glass py-3' : 'bg-transparent'}`}>
        <div className="kurdish-font text-2xl font-bold text-white drop-shadow-sm">ئەوین</div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium text-white/90">
          <a href="#story" className="hover:text-white transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#details" className="hover:text-white transition-colors">Details</a>
          <a href="#rsvp" className="px-4 py-1 border border-white/40 rounded-full hover:bg-white hover:text-rose-600 transition-all">RSVP</a>
        </div>
        <button className="md:hidden text-white"><Heart size={24} /></button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden fluid-gradient">
        <FloatingHearts />
        
        <div className="z-10 text-white animate-fade-in">
          <Heart className="mx-auto text-white/80 mb-6 animate-pulse" size={40} fill="currentColor" />
          <h1 className="kurdish-font text-6xl md:text-8xl mb-8 leading-tight drop-shadow-lg">
            ئەوین گیان خۆشمەوێی
          </h1>
          <div className="flex flex-col items-center gap-4">
            <div className="h-[1px] w-24 bg-white/40"></div>
            <p className="serif text-xl md:text-2xl font-light tracking-wide italic">Forever & Always</p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce cursor-pointer">
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 px-6 bg-white relative">
        <div className={`max-w-4xl mx-auto text-center reveal ${isVisible.story ? 'reveal-active' : ''}`}>
          <Heart className="mx-auto text-rose-200 mb-8" size={32} strokeWidth={1} />
          <h2 className="serif text-4xl md:text-5xl mb-12 text-slate-900">Where it all began...</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left items-center">
            <div className="aspect-[4/5] bg-rose-50 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" 
                alt="Couple walking" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600 first-letter:text-5xl first-letter:serif first-letter:float-left first-letter:mr-3 first-letter:text-rose-500">
                It started with a shared coffee in a quiet library corner. Three years later, we find ourselves preparing to walk down an aisle of wildflowers in a coastal Italian town. Our journey has been a tapestry of quiet moments and grand adventures.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                From long city walks to the midnight sunsets of summer, every chapter has brought us closer to this very moment. We can't wait to share our love with the people who matter most.
              </p>
              <div className="pt-4 kurdish-font text-xl text-rose-400 text-right">— بە خۆشەویستییەوە</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-slate-50">
        <div className={`max-w-6xl mx-auto reveal ${isVisible.gallery ? 'reveal-active' : ''}`}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="serif text-5xl mb-4">The Gallery</h2>
              <p className="text-slate-500 tracking-wide uppercase text-sm">Snapshots of our favorite memories</p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 border border-slate-200 rounded-full hover:bg-rose-50 transition-colors"><Camera size={20} /></button>
              <button className="p-3 border border-slate-200 rounded-full hover:bg-rose-50 transition-colors"><Share2 size={20} /></button>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src="https://images.unsplash.com/photo-1522673607200-16488354495f?auto=format&fit=crop&q=80&w=800" alt="Memory 1" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 scale-[0.95]">
              <img src="https://images.unsplash.com/photo-1460978812857-470ed1c75af7?auto=format&fit=crop&q=80&w=800" alt="Memory 2" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 translate-y-4">
              <img src="https://images.unsplash.com/photo-1518049360731-32823ff30ecf?auto=format&fit=crop&q=80&w=800" alt="Memory 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Music Button */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 bg-rose-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
      </button>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 bg-slate-900 px-6">
        <div className="kurdish-font text-3xl text-white mb-6">ئەوین</div>
        <p className="text-xs uppercase tracking-[0.2em] font-light">With all our love, forever and always.</p>
        <p className="mt-8 text-[10px] opacity-30">© 2026 DESIGNED WITH LOVE</p>
      </footer>
    </div>
  );
};

export default App;
