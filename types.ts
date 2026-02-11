export type FactionType = 'K.S.A' | '백골교' | '오염체' | 'C.R.A';

export interface Character {
  id: string;
  name: string;
  gender: string;
  age: number;
  mbti: string;
  keywords: string[];
  features: string;
  quote: string;
  weapon: string;
  position: string;
  ability: string;
  grade: string;
  appearance: string;
  code: string;
  faction: FactionType;
}

export interface TimelineEvent {
  year: string;
  description: string;
}

export interface FactionInfo {
  name: FactionType;
  fullName?: string;
  description: string;
  location: string;
  colorClass: string;
  borderColorClass: string;
}