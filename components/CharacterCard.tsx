import React from 'react';
import { Character, FactionInfo } from '../types';
import { Target, User, Sparkles, AlertCircle } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  factionInfo: FactionInfo;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, factionInfo }) => {
  return (
    <div className={`group relative bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:${factionInfo.borderColorClass} transition-colors duration-300`}>
      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-t from-${factionInfo.colorClass.replace('text-', '')}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-2/5 h-80 md:h-auto relative overflow-hidden bg-slate-950">
          <img
            src={`https://igx.kr/n/hM/${character.code}/1`}
            alt={character.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 md:from-transparent md:bg-gradient-to-r md:via-transparent md:to-slate-900/80 mix-blend-multiply" />
          
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 text-xs font-bold border ${factionInfo.borderColorClass} ${factionInfo.colorClass} bg-black/60 rounded backdrop-blur-sm`}>
              {character.grade}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-6 flex flex-col justify-between relative z-10">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-white font-orbitron tracking-wider">{character.name}</h3>
                <p className={`text-sm ${factionInfo.colorClass} font-semibold`}>{character.position}</p>
              </div>
              <span className="text-xs text-slate-500 font-mono border border-slate-700 px-1 rounded">{character.mbti}</span>
            </div>

            <div className="mb-4">
              <p className="text-slate-300 italic text-sm border-l-2 border-slate-600 pl-3 py-1 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                "{character.quote}"
              </p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {character.keywords.map((kw, idx) => (
                  <span key={idx} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-full">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-sm text-slate-400">
               <div className="flex items-center gap-2">
                 <User className="w-4 h-4 text-slate-500" />
                 <span>{character.age}세 · {character.gender} · {character.appearance}</span>
               </div>
               <div className="flex items-center gap-2">
                 <Target className="w-4 h-4 text-slate-500" />
                 <span><span className="text-slate-500">무기:</span> {character.weapon}</span>
               </div>
               <div className="flex items-start gap-2">
                 <Sparkles className="w-4 h-4 text-slate-500 mt-0.5" />
                 <span><span className="text-slate-500">이능:</span> {character.ability}</span>
               </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-800">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-slate-600 mt-0.5" />
              <p className="text-xs text-slate-500 leading-relaxed">{character.features}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;