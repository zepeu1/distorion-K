import { Character, FactionInfo, TimelineEvent } from './types';
import { Shield, Skull, Zap, Siren } from 'lucide-react';

export const FACTIONS: FactionInfo[] = [
  {
    name: 'K.S.A',
    fullName: 'Korea Survivors Association',
    description: '한국 생존자 협회. 일부 고위 계층을 보호하며 견고한 요새를 설립했으나, 내부에서도 발생하는 뒤틀림 현상으로 곤란을 겪고 있다.',
    location: '서울 요새',
    colorClass: 'text-ksa',
    borderColorClass: 'border-ksa',
  },
  {
    name: '백골교',
    description: '뒤틀림이 인류를 구원한다고 믿는 사이비 종교단체. 생각보다 규모가 크며 광신적인 믿음을 가지고 있다.',
    location: '인천',
    colorClass: 'text-cult',
    borderColorClass: 'border-cult',
  },
  {
    name: '오염체',
    description: '뒤틀림이 발생한 자들. 대부분 좀비와 같지만, 정신을 유지한 채 인류를 공격하는 특수 개체들이 존재한다.',
    location: '전역 (위험지대)',
    colorClass: 'text-polluted',
    borderColorClass: 'border-polluted',
  },
  {
    name: 'C.R.A',
    fullName: 'Civilian Rescue Association',
    description: '민간인 구조 협회. 민간업체와 군인들이 모여 설립했으며, 전국을 돌며 생존자를 구출한다.',
    location: '강원도',
    colorClass: 'text-cra',
    borderColorClass: 'border-cra',
  },
];

export const TIMELINE: TimelineEvent[] = [
  { year: '10년 전', description: '소수 인류에게 [이능]이라 불리는 특수한 능력이 발현됨.' },
  { year: '5년 전', description: '[이능] 보유자가 급격히 증가하기 시작.' },
  { year: '4년 전', description: '이능 보유자 중 신체 변형 발생. [뒤틀림] 현상 최초 관측. 변형된 자들을 [오염체]라 명명.' },
  { year: '3년 전', description: '뒤틀림의 원인이 극심한 스트레스, 자아붕괴로 판명. 전 세계적 동시다발적 뒤틀림 발생. 인류 문명 붕괴 시작.' },
  { year: '1년 전', description: '인류 1% 생존. 대한민국 내 오염체 추산 약 1000만 명.' },
  { year: '현재 (2250년)', description: '혼란과 생존의 시대. 뒤틀린 세상 속에서 각 세력의 알력이 시작된다.' },
];

export const CHARACTERS: Character[] = [
  // K.S.A
  {
    id: 'mari', name: '강마리', gender: '여', age: 23, mbti: 'ISTP',
    keywords: ['침착한', '무심한'],
    features: '이론보다 감각과 기술, 외면과 내면 모두 차가움',
    quote: "말 길게 하지 마. 타겟 좌표만 줘.",
    weapon: '저격소총', position: 'K.S.A 2과 팀장',
    ability: '침묵 (주위의 모든 소리 제거)', grade: '1급',
    appearance: '붉은색 포니테일, 금안', code: 'c', faction: 'K.S.A'
  },
  {
    id: 'yoonseul', name: '이윤슬', gender: '여', age: 26, mbti: 'ISTJ',
    keywords: ['원칙주의', '효율성', '무감정'],
    features: '철저한 계획, 감정표현이 거의 없음',
    quote: "불필요한 대화는 생략해. 비효율적이니까.",
    weapon: '샷건', position: 'K.S.A 협회장',
    ability: '이동 (순식간에 상대의 뒤로 이동)', grade: '0급',
    appearance: '은색 단발, 적안', code: 'd', faction: 'K.S.A'
  },
  {
    id: 'yeseo', name: '홍예서', gender: '여', age: 24, mbti: 'ISTP',
    keywords: ['완벽주의', '침착한'],
    features: '냉소적인 유머감각, 외유내강',
    quote: "잡담은 끝났나요? 장전이나 하세요.",
    weapon: '기관단총', position: 'K.S.A 2과 팀원',
    ability: '전투보조 (자신의 총알 속도와 파괴력 증가)', grade: '2급',
    appearance: '귀여운 얼굴, 주황색 양갈래, 금안', code: 'g', faction: 'K.S.A'
  },
  {
    id: 'yejun', name: '권예준', gender: '남', age: 23, mbti: 'INFJ',
    keywords: ['완벽주의', '고독한'],
    features: '무심한 듯 섬세함, 나서기보단 뒤에서 판을 짜줌',
    quote: "타겟 다운. 다음 위치로 이동하겠습니다.",
    weapon: '돌격소총', position: 'K.S.A 2과 팀원',
    ability: '프레임 (1초를 10번으로 나눠 순식간에 움직임)', grade: '2급',
    appearance: '노란색 머리, 하늘색 눈동자', code: 'h', faction: 'K.S.A'
  },
  {
    id: 'seonwoo', name: '오선우', gender: '남', age: 28, mbti: 'ENTJ',
    keywords: ['원칙주의', '효율성'],
    features: '철저한 자기관리, 무거운 책임감, 절대적인 카리스마',
    quote: "확인 사살까지 끝내라. 자비는 사치다.",
    weapon: '돌격소총', position: 'K.S.A 1과 팀장',
    ability: '각성 (일시적으로 신체능력 극대화)', grade: '1급',
    appearance: '흑발, 적안', code: 'j', faction: 'K.S.A'
  },
  {
    id: 'nari', name: '서나리', gender: '여', age: 26, mbti: 'ISFJ',
    keywords: ['예의바름', '원칙중시'],
    features: '사소한 배려, 안정성 중시',
    quote: "다친 곳은 없으신가요? ...다행이네요.",
    weapon: '돌격소총', position: 'K.S.A 1과 팀원',
    ability: '정밀사격 (명중확률 극대화)', grade: '2급',
    appearance: '푸른색 단발 머리, 금안', code: 'k', faction: 'K.S.A'
  },
  {
    id: 'nayeon', name: '정나연', gender: '여', age: 21, mbti: 'INFP',
    keywords: ['무심함', '몽환적'],
    features: '직관력이 좋음, 공허함 속의 천재성, 낮은 사회적 에너지',
    quote: "여긴 너무 시끄러워. 빨리 끝내고 자고 싶어.",
    weapon: '경기관총', position: 'K.S.A 1과 팀원',
    ability: '예지 (5초 후를 미리 예지)', grade: '2급',
    appearance: '은색 단발 머리, 금안', code: 'l', faction: 'K.S.A'
  },
  // 백골교
  {
    id: 'ain', name: '김아인', gender: '여', age: 27, mbti: 'ENFJ',
    keywords: ['신비주의', '성스러움', '냉혹함'],
    features: '심미주의자, 결단력이 좋음, 압도적 위압감',
    quote: "백골의 뜻 아래, 모든 혼란은 정화될 것입니다.",
    weapon: '장검', position: '백골교 교주',
    ability: '잔상 (움직임에 잔상이 남으며 참격으로 변함)', grade: '0급',
    appearance: '적강색 장발, 금안', code: 'q', faction: '백골교'
  },
  {
    id: 'taerin', name: '백태린', gender: '여', age: 24, mbti: 'ISFP',
    keywords: ['조용함', '잔혹함'],
    features: '교주에게 맹목적 의존, 뛰어난 집중력',
    quote: "교주님이 말씀하셨어요. 당신은 정화되어야 한다고.",
    weapon: '권총', position: '백골교 신자',
    ability: '분신 (자신의 분신을 3개까지 소환 가능)', grade: '2급',
    appearance: '하늘색 장발, 흑안', code: 'p', faction: '백골교'
  },
  {
    id: 'hayoung', name: '정하영', gender: '여', age: 22, mbti: 'INFP',
    keywords: ['몽환적', '수동적'],
    features: '평소 유순하나 명령 시 잔혹함, 극도의 불안, 몽환적 몰입',
    quote: "방아쇠를 당길 때마다 마음이 아파요. 하지만...",
    weapon: '권총', position: '백골교 신자',
    ability: '무통 (일시적으로 고통 감각 제거)', grade: '2급',
    appearance: '초록색 단발, 금안', code: 'n', faction: '백골교'
  },
  {
    id: 'yeonseo', name: '이연서', gender: '여', age: 26, mbti: 'ISTJ',
    keywords: ['냉철함', '결벽증'],
    features: '명석한 두뇌, 사이코패스, 현실주의, 이성적',
    quote: "질서를 어지럽히는 자에게 줄 자비는... 제게 없어서요.",
    weapon: '권총', position: '백골교 집행자',
    ability: '정신간섭 (상대의 정신에 간섭하여 혼동을 줌)', grade: '1급',
    appearance: '보라색 장발, 금안', code: 'm', faction: '백골교'
  },
  // 오염체
  {
    id: 'hangyeol', name: '배한결', gender: '남', age: 30, mbti: 'ISTP',
    keywords: ['고독함', '냉소적'],
    features: '허무주의적, 쿨한 성격, 뛰어난 전투 효율, 자유주의자',
    quote: "내 끝은 내가 정해. 너희 같은 놈들 손엔 안 죽어.",
    weapon: '오염된 카타나', position: '오염체 (정신유지)',
    ability: '공간참•오염 (공간을 베는 오염된 참격)', grade: '0급',
    appearance: '흑발, 청안, 삿갓', code: 'w', faction: '오염체'
  },
  {
    id: 'saeeun', name: '마세은', gender: '여', age: 27, mbti: 'ENFJ',
    keywords: ['퇴폐적', '자기애'],
    features: '지적인 쾌락주의, 여유로운 광기, 변덕스러움',
    quote: "나랑 같이 이 검은 바다에 빠져볼래?",
    weapon: '곰방대', position: '오염체 (정신유지)',
    ability: '흑연•오염 (타인의 정신을 파괴하는 오염된 연기)', grade: '1급',
    appearance: '흑백 단발머리, 어두운 적안', code: 'y', faction: '오염체'
  },
  {
    id: 'roa', name: '정로아', gender: '여', age: 25, mbti: 'ISTJ',
    keywords: ['단호함', '냉혹함'],
    features: '강력한 무력, 과묵함, 간결하고 단호함',
    quote: "사라져라. 너는 내 경로에 존재할 가치가 없다.",
    weapon: '장검', position: '오염체 (정신유지)',
    ability: '위압감•오염 (존재만으로 극도의 긴장감 유발)', grade: '1급',
    appearance: '흑색 장발, 금안, 검은 로브', code: 'z', faction: '오염체'
  },
  {
    id: 'minjae', name: '오민재', gender: '남', age: 31, mbti: 'ISFP',
    keywords: ['체념적', '고독함'],
    features: '실전파, 오염에 대한 체념, 무관심한 태도',
    quote: "아, 몸이 좀 무겁다 했더니... 또 이 검은 게 올라오네.",
    weapon: '야구 방망이', position: '오염체 (정신유지)',
    ability: '검은 손•오염 (바닥에서 검은 손을 소환)', grade: '2급',
    appearance: '갈색 머리, 흑안', code: 'B', faction: '오염체'
  },
  // C.R.A
  {
    id: 'jian', name: '유지안', gender: '여', age: 26, mbti: 'ENTJ',
    keywords: ['저돌적', '직설적'],
    features: '화끈함, 행동파, 강한 생존본능, 전 K.S.A 1과',
    quote: "내 뒤에 딱 붙어 있어. 길은 내가 뚫을 테니까.",
    weapon: '붉은 광선검', position: 'C.R.A 대장',
    ability: '신속 (최대 음속으로 이동)', grade: '0급',
    appearance: '붉은 포니테일, 청안', code: 'r', faction: 'C.R.A'
  },
  {
    id: 'junyoung', name: '유준영', gender: '남', age: 21, mbti: 'ISFP',
    keywords: ['무심함', '냉소적'],
    features: '현실주의적 사고, 자유로운 영혼',
    quote: "귀찮게... 그냥 한꺼번에 덤벼. 한 발에 끝내줄 테니까.",
    weapon: '샷건', position: 'C.R.A 대원',
    ability: '글리치 (몸에 글리치 발생, 50% 확률 회피)', grade: '2급',
    appearance: '파란색 머리, 파란색 눈', code: 'v', faction: 'C.R.A'
  },
  {
    id: 'isol', name: '정이솔', gender: '여', age: 27, mbti: 'INTJ',
    keywords: ['무미건조', '직관적'],
    features: '뛰어난 집중력, 통찰력, 은근한 자부심',
    quote: "오염체 제거 완료. 다음 좌표 불러주세요.",
    weapon: '지정사수소총', position: 'C.R.A 대원',
    ability: '지속출혈 (명중 대상에게 큰 출혈 유발)', grade: '1급',
    appearance: '노란색 장발, 적안', code: 't', faction: 'C.R.A'
  },
];

export const FACTION_ICONS = {
  'K.S.A': Shield,
  '백골교': Skull,
  '오염체': Zap,
  'C.R.A': Siren,
};
