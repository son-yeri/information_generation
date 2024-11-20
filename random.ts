import { randFloat } from '@ngneat/falso';
import { CoreCompetencies } from './types'; // CoreCompetency 인터페이스 임포트

// 랜덤 퍼센트 값을 생성하는 함수
const generateRandomPercentage = (): string => {
  return `${randFloat({ min: 0, max: 120, precision: 0.01 })}%`;
};

// CoreCompetency 객체에 랜덤 퍼센트 데이터 할당
export const coreCompetencyData: CoreCompetencies = {
  serlead: generateRandomPercentage(),
  sympcomm: generateRandomPercentage(),
  originality: generateRandomPercentage(),
  pliability: generateRandomPercentage(),
  knowledgequest: generateRandomPercentage(),
  psskills: generateRandomPercentage(),
  globalmind: generateRandomPercentage(),
  asianculture: generateRandomPercentage(),
};