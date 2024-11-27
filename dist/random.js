"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreCompetencyData = void 0;
const faker_1 = require("@faker-js/faker");
// CoreCompetency 객체에 랜덤 성 또는 랜덤 퍼센트 데이터 할당
exports.coreCompetencyData = {
    user: {
        username: `${faker_1.fakerKO.person.firstName()} ${faker_1.fakerKO.person.lastName()}`,
        email: faker_1.fakerKO.internet.email(),
        password: faker_1.fakerKO.internet.password(),
        studentnumber: faker_1.fakerKO.number.float({ min: 10000000, max: 99999999 }),
    },
    competencies: {
        serlead: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
        sympcomm: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
        originality: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
        pliability: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
        knowledgequest: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
        psskills: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
        globalmind: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
        asianculture: faker_1.fakerKO.number.float({ min: 0, max: 120, fractionDigits: 2 }),
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
