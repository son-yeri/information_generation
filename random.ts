import {fakerKO} from '@faker-js/faker'

import { AccountInfo, CoreCompetencies } from './types'; // CoreCompetency 인터페이스 임포트

// CoreCompetency 객체에 랜덤 성 또는 랜덤 퍼센트 데이터 할당
export const coreCompetencyData: {
  user: AccountInfo;
  competencies: CoreCompetencies;
} = {
  user: {
    username: `${fakerKO.person.lastName()} ${fakerKO.person.firstName()}`,
    email: fakerKO.internet.email(), 
    password:  fakerKO.internet.password(),
    studentnumber: fakerKO.number.float({ min: 10000000, max: 99999999 }),
  },
  competencies: {
    serlead: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}), 
    sympcomm: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}),  
    originality: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}),
    pliability: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}),
    knowledgequest: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}),
    psskills: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}),
    globalmind: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}),
    asianculture: fakerKO.number.float({min: 0, max: 120,  fractionDigits: 2}),


  },
};


// 음성 판단하는 문제
// 음성 빅스비 변환 발화자 음화자 문제가 있음 
// 발화자 인식 문제 

// 해결할 수 있는 

// 텍스트 돈 대학원은 
// 대학원을 잘 찾으면 

// 텍스로 가는 것이 유리하다...coreCompetencyData
// G스타
// E스타
// 맘바 연구

// 부피 걱정하기
// 한글의 표같이 하기 - 그렇게 됐습니다. 
