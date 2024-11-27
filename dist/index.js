"use strict";
// import { coreCompetencyData } from './random';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(coreCompetencyData);
const random_1 = require("./random");
const fs_1 = __importDefault(require("fs"));
// JSON 데이터를 CSV로 변환하는 함수
const jsonToCSV = (data) => {
    const headers = Object.keys(data); // 열 제목 생성
    const values = Object.values(data); // 데이터 값 추출
    // CSV 형식으로 변환
    return `${headers.join(',')}\n${values.join(',')}`;
};
// CSV 파일로 저장하는 함수
const saveToCSV = (data, filename) => {
    const csvData = jsonToCSV(data); // 데이터를 CSV 형식으로 변환
    fs_1.default.writeFileSync(filename, csvData, 'utf-8'); // 파일 저장
    console.log(`CSV 파일 저장 완료: ${filename}`);
};
// 데이터 가져오기
const data = random_1.coreCompetencyData; // coreCompetencyData를 객체로 가정
// CSV 저장
saveToCSV(data, 'coreCompetencyData.csv');
