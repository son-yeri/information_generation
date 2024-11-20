"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreCompetencyData = void 0;
var falso_1 = require("@ngneat/falso");
// 대한민국 성씨 배열
var koreanLastNames = [
    '가', '간', '갈', '감', '강', '고', '곽', '구', '권', '김', '나', '남', '노', '도', '류', '마', '민', '박', '방', '서', '성', '손',
    '송', '신', '양', '여', '오', '우', '유', '이', '임', '장', '전', '정', '조', '최', '한', '허', '홍'
];
// 랜덤 성씨를 생성하는 함수
var generateRandomKoreanLastName = function () {
    var randomIndex = Math.floor(Math.random() * koreanLastNames.length);
    return koreanLastNames[randomIndex];
};
// 랜덤 퍼센트 값을 생성하는 함수
var generateRandomPercentage = function () {
    return "".concat((0, falso_1.randFloat)({ min: 0, max: 120, precision: 0.01 }), "%");
};
// CoreCompetency 객체에 랜덤 성 또는 랜덤 퍼센트 데이터 할당
exports.coreCompetencyData = {
    serlead: generateRandomKoreanLastName(), // 성씨 데이터
    sympcomm: generateRandomPercentage(), // 퍼센트 데이터
    originality: generateRandomKoreanLastName(),
    pliability: generateRandomPercentage(),
    knowledgequest: generateRandomKoreanLastName(),
    psskills: generateRandomPercentage(),
    globalmind: generateRandomKoreanLastName(),
    asianculture: generateRandomPercentage(),
};
