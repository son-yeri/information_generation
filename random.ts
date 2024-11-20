import { randFloat } from '@ngneat/falso';
import { CoreCompetencies } from './types'; // CoreCompetency 인터페이스 임포트

// 대한민국 성씨 배열
const koreanLastNames = [
  '가', '간', '갈', '감', '강', '고', '곽', '구', '권', '김', '나', '남', '노', '도', '류', '마', '민', '박', '방', '서', '성', '손',
  '송', '신', '양', '여', '오', '우', '유', '이', '임', '장', '전', '정', '조', '최', '한', '허', '홍'
];

// 랜덤 성씨를 생성하는 함수
const generateRandomKoreanLastName = (): string => {
  const randomIndex = Math.floor(Math.random() * koreanLastNames.length);
  return koreanLastNames[randomIndex];
};



// 랜덤 퍼센트 값을 생성하는 함수
const generateRandomPercentage = (): string => {
  return `${randFloat({ min: 0, max: 120, precision: 0.01 })}%`;
};

// CoreCompetency 객체에 랜덤 성 또는 랜덤 퍼센트 데이터 할당
export const coreCompetencyData: CoreCompetencies = {
  username: generateRandomKoreanLastName(),
  email: 
  password: 
  serlead: generateRandomPercentage(), 
  sympcomm: generateRandomPercentage(),  
  originality: generateRandomPercentage(),
  pliability: generateRandomPercentage(),
  knowledgequest: generateRandomPercentage(),
  psskills: generateRandomPercentage(),
  globalmind: generateRandomPercentage(),
  asianculture: generateRandomPercentage(),
};



// const koreanLastNames = ['김', '이', '박', '최'];
// const koreanFirstNames = ['민준', '서윤', '지우'];

// const generateRandomFullName = (): string => {
//   const lastName = koreanLastNames[Math.floor(Math.random() * koreanLastNames.length)];
//   const firstName = koreanFirstNames[Math.floor(Math.random() * koreanFirstNames.length)];
//   return `${lastName}${firstName}`;
// };