"use client";
import { Button } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";

function selectRandomItems(list, count) {
  const shuffled = list.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Home() {
  const hanjaImages = [
    { hanja: "校", title: "학교 교" },
    { hanja: "敎", title: "가르칠 교" },
    { hanja: "九", title: "아홉 구" },
    { hanja: "國", title: "나라 국" },
    { hanja: "軍", title: "군사 군" },
    { hanja: "金", title: "쇠-성 금-김" },
    { hanja: "南", title: "남녘 남" },
    { hanja: "女", title: "계집 녀" },
    { hanja: "年", title: "해 년" },
    { hanja: "大", title: "큰 대" },
    { hanja: "東", title: "동녘 동" },
    { hanja: "六", title: "여섯 륙" },
    { hanja: "萬", title: "일만 만" },
    { hanja: "母", title: "어미 모" },
    { hanja: "木", title: "나무 목" },
    { hanja: "門", title: "문 문" },
    { hanja: "民", title: "백성 민" },
    { hanja: "白", title: "흰 백" },
    { hanja: "父", title: "아비 부" },
    { hanja: "北", title: "북녘 북" },
    { hanja: "四", title: "넉 사" },
    { hanja: "山", title: "메 산" },
    { hanja: "三", title: "석 삼" },
    { hanja: "生", title: "날 생" },
    { hanja: "西", title: "서녘 서" },
    { hanja: "先", title: "먼저 선" },
    { hanja: "小", title: "작을 소" },
    { hanja: "水", title: "물 수" },
    { hanja: "室", title: "집 실" },
    { hanja: "十", title: "열 십" },
    { hanja: "五", title: "다섯 오" },
    { hanja: "王", title: "임금 왕" },
    { hanja: "外", title: "바깥 외" },
    { hanja: "月", title: "달 월" },
    { hanja: "二", title: "두 이" },
    { hanja: "人", title: "사람 인" },
    { hanja: "一", title: "한 일" },
    { hanja: "日", title: "날 일" },
    { hanja: "長", title: "긴 장" },
    { hanja: "弟", title: "아우 제" },
    { hanja: "中", title: "가운데 중" },
    { hanja: "靑", title: "푸를 청" },
    { hanja: "寸", title: "마디 촌" },
    { hanja: "七", title: "일곱 칠" },
    { hanja: "土", title: "흙 토" },
    { hanja: "八", title: "여덟 팔" },
    { hanja: "學", title: "배울 학" },
    { hanja: "韓", title: "한국 한" },
    { hanja: "兄", title: "형 형" },
    { hanja: "火", title: "불 화" },
  ];
  ("");
  const randomHanjaImages = selectRandomItems(hanjaImages, 4);
  const randomIndex = Math.floor(Math.random() * randomHanjaImages.length);
  const randomItem = randomHanjaImages[randomIndex];

  const [score, setScore] = useState(0);
  const [selectedHanja, setSelectedHanja] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageClick = (selectedImageTitle, selectedImageHanja) => {
    setSelectedHanja(selectedImageTitle);
    if (selectedImageTitle === randomItem.title) {
      setScore((prevScore) => prevScore + 1);
      setResult("Correct! " + selectedImageTitle + " is " + selectedImageHanja);
    } else {
      setResult(
        "Sorry, " +
          selectedImageHanja +
          " is " +
          selectedImageTitle +
          "! The answer for " +
          hanjaImages.find((hanja) => hanja.title === randomItem.title).title +
          " is: " +
          randomItem.hanja
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        다음 훈과 음에 맞는 한자를 고르십시오
        <p className={"text-4xl"}>
          {"<"}
          {randomItem.title}
          {">"}
        </p>
        {score}점
        <div className="flex flex-wrap gap-2">
          {randomHanjaImages.map((image) => (
            <Button
              gradientMonochrome="success"
              className="text-center"
              size={"xl"}
              pill={true}
              key={image.hanja}
              alt={image.hanja}
              onClick={() => {
                handleImageClick(image.title, image.hanja);
              }}
            >
              <p className={"text-7xl"}>{image.hanja}</p>
            </Button>
          ))}
          {/* <Button pill={true} onClick={() => setScore(0)}>
              Reset
            </Button> */}
        </div>
        <p>{result}</p>
      </div>
    </main>
  );
}
