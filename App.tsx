import React, { useState, useMemo } from 'react';
import { CHARACTERS, FACTIONS, TIMELINE, FACTION_ICONS } from './constants';
import GlitchText from './components/GlitchText';
import CharacterCard from './components/CharacterCard';
import { FactionType } from './types';
import { MapPin, Clock, ChevronDown, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeFaction, setActiveFaction] = useState<FactionType | 'ALL'>('ALL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredCharacters = useMemo(() => {
    if (activeFaction === 'ALL') return CHARACTERS;
    return CHARACTERS.filter(char => char.faction === activeFaction);
  }, [activeFaction]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-red-500/30 selection:text-red-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center font-orbitron font-bold text-white">D</div>
              <span className="font-orbitron font-bold text-xl tracking-widest text-white">DISTORION</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 font-orbitron text-sm">
                <button onClick={() => scrollToSection('world')} className="hover:text-red-500 transition-colors">WORLD</button>
                <button onClick={() => scrollToSection('factions')} className="hover:text-red-500 transition-colors">FACTIONS</button>
                <button onClick={() => scrollToSection('characters')} className="hover:text-red-500 transition-colors">CHARACTERS</button>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-400 hover:text-white">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-orbitron">
                <button onClick={() => scrollToSection('world')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">WORLD</button>
                <button onClick={() => scrollToSection('factions')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">FACTIONS</button>
                <button onClick={() => scrollToSection('characters')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">CHARACTERS</button>
             </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618557219623-69022748a39e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)]" />

        <div className="relative z-10 text-center px-4">
          <p className="text-red-500 font-orbitron tracking-[0.3em] text-sm md:text-base animate-pulse mb-4">SYSTEM WARNING: REALITY COMPROMISED</p>
          <GlitchText 
            text="DISTORION" 
            as="h1" 
            className="text-6xl md:text-9xl font-black text-white font-orbitron tracking-tighter mb-2"
          />
          <h2 className="text-xl md:text-3xl text-slate-400 font-light tracking-widest mt-4">
            2250 KOREA <span className="text-red-600 mx-2">///</span> APOCALYPSE
          </h2>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="max-w-xl text-slate-500 text-sm leading-relaxed">
              뒤틀림이 삼킨 세계. 오염된 도시. 살아남은 인류의 마지막 발악.<br/>
              당신의 이야기는 이 붕괴된 서울에서 시작됩니다.
            </p>
            <button 
              onClick={() => scrollToSection('world')}
              className="mt-8 px-8 py-3 border border-red-900/50 bg-red-950/20 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-orbitron text-sm tracking-widest uppercase flex items-center gap-2"
            >
              Enter The Chaos <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Worldview Section */}
      <section id="world" className="py-24 bg-slate-950 relative border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-4">TIMELINE</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-1/2 space-y-12">
            {TIMELINE.map((event, index) => (
              <div key={index} className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-slate-950 border-2 border-red-500 z-10" />

                <div className="w-full md:w-1/2 p-4">
                  <div className={`bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-slate-600 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-red-500 font-orbitron text-sm font-bold block mb-2">{event.year}</span>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factions Section */}
      <section id="factions" className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-4">FACTIONS</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">붕괴된 질서 속에서 태어난 네 개의 축. 각자의 신념과 광기로 생존을 도모한다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACTIONS.map((faction) => {
              const Icon = FACTION_ICONS[faction.name];
              return (
                <div key={faction.name} className={`bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-opacity-50 transition-all duration-300 group hover:-translate-y-2 ${faction.borderColorClass}`}>
                  <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4 ${faction.colorClass} group-hover:bg-white/5 transition-colors`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 text-white font-orbitron`}>{faction.name}</h3>
                  {faction.fullName && <p className="text-xs text-slate-500 font-orbitron mb-3">{faction.fullName}</p>}
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed min-h-[80px]">{faction.description}</p>
                  <div className="flex items-center text-xs text-slate-500 pt-4 border-t border-slate-900">
                    <MapPin className="w-3 h-3 mr-1" />
                    {faction.location}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-24 bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-2">CHARACTERS</h2>
               <p className="text-slate-500 text-sm">기록된 생존자 및 오염체 데이터베이스</p>
            </div>

            {/* Faction Filter */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveFaction('ALL')}
                className={`px-4 py-2 rounded text-xs font-bold font-orbitron transition-all border ${activeFaction === 'ALL' ? 'bg-white text-black border-white' : 'bg-transparent text-slate-500 border-slate-800 hover:border-slate-500'}`}
              >
                ALL
              </button>
              {FACTIONS.map(f => (
                 <button 
                  key={f.name}
                  onClick={() => setActiveFaction(f.name)}
                  className={`px-4 py-2 rounded text-xs font-bold font-orbitron transition-all border ${activeFaction === f.name ? `${f.colorClass.replace('text-', 'bg-')} text-black ${f.borderColorClass.replace('border-', 'border-')}` : `bg-transparent text-slate-500 border-slate-800 hover:text-white`}`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCharacters.map((char) => {
              const factionInfo = FACTIONS.find(f => f.name === char.faction)!;
              return (
                <CharacterCard key={char.id} character={char} factionInfo={factionInfo} />
              );
            })}
          </div>
          
          {filteredCharacters.length === 0 && (
             <div className="text-center py-20 text-slate-600 font-orbitron">
               NO DATA FOUND
             </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 bg-black text-center text-slate-600 text-xs font-orbitron">
        <p>&copy; 2250 DISTORION PROJECT. ALL RIGHTS RESERVED.</p>
        <p className="mt-2">SYSTEM STATUS: UNSTABLE</p>
      </footer>
    </div>
  );
};

export default App;