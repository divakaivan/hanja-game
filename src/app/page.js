"use client";

import { useState } from "react";
import Image from "next/image";

function selectRandomItems(list, count) {
  const shuffled = list.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Home() {
  const hanjaImages = [
    { src: "/images/가르칠 교.png", title: "가르칠 교" },
    { src: "/images/가운데 중.png", title: "가운데 중" },
    { src: "/images/계접 녀.png", title: "계접 녀" },
    { src: "/images/군사 군.png", title: "군사 군" },
    { src: "/images/긴 장.png", title: "긴 장" },
    { src: "/images/나라 국.png", title: "나라 국" },
    { src: "/images/나무 목.png", title: "나무 목" },
    { src: "/images/날 생.png", title: "날 생" },
    { src: "/images/날 일.png", title: "날 일" },
    { src: "/images/남녘 남.png", title: "남녘 남" },
    { src: "/images/다섯 오.png", title: "다섯 오" },
    { src: "/images/달 월.png", title: "달 월" },
    { src: "/images/동녘 동.png", title: "동녘 동" },
    { src: "/images/두 이.png", title: "두 이" },
    { src: "/images/마디 촌.png", title: "마디 촌" },
    { src: "/images/먼저 선.png", title: "먼저 선" },
    { src: "/images/메 산.png", title: "메 산" },
    { src: "/images/문 문.png", title: "문 문" },
    { src: "/images/물 수.png", title: "물 수" },
    { src: "/images/바깥 외.png", title: "바깥 외" },
    { src: "/images/배울 학.png", title: "배울 학" },
    { src: "/images/백성 민.png", title: "백성 민" },
    { src: "/images/북녘 북.png", title: "북녘 북" },
    { src: "/images/불 화.png", title: "불 화" },
    { src: "/images/사람 인.png", title: "사라 인" },
    { src: "/images/서녘 서.png", title: "서녘 서" },
    { src: "/images/넉 사.png", title: "넉 사" },
    { src: "/images/석 삼.png", title: "석 삼" },
    { src: "/images/쇠-성 금-김.png", title: "쇠-성 금-김" },
    { src: "/images/아비 부.png", title: "아비 부" },
    { src: "/images/아우 제.png", title: "아우 제" },
    { src: "/images/아홉 구.png", title: "아홈 구" },
    { src: "/images/어미 모.png", title: "어미 모" },
    { src: "/images/여덟 팔.png", title: "여덟 팔" },
    { src: "/images/여섯 륙.png", title: "여서 륙" },
    { src: "/images/열 십.png", title: "열 십" },
    { src: "/images/일곱 칠.png", title: "일곱 칠" },
    { src: "/images/일만 만.png", title: "일만 만" },
    { src: "/images/임금 왕.png", title: "임금 왕" },
    { src: "/images/작을 소.png", title: "작을 소" },
    { src: "/images/집 실.png", title: "집 실" },
    { src: "/images/큰 대.png", title: "큰 대" },
    { src: "/images/푸를 청.png", title: "푸를 청" },
    { src: "/images/학교 교.png", title: "학교 교" },
    { src: "/images/한 일.png", title: "한 일" },
    { src: "/images/한국 한.png", title: "한국 한" },
    { src: "/images/해 년.png", title: "해 년" },
    { src: "/images/형 형.png", title: "형 형" },
    { src: "/images/흙 토.png", title: "흙 토" },
    { src: "/images/흰 백.png", title: "흰 백" },
  ];
  const randomHanjaImages = selectRandomItems(hanjaImages, 4);
  const randomIndex = Math.floor(Math.random() * randomHanjaImages.length);
  const randomItem = randomHanjaImages[randomIndex];

  const [score, setScore] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (selectedImageTitle) => {
    setSelectedImage(selectedImageTitle);
    if (selectedImageTitle === randomItem.title) {
      setScore((prevScore) => prevScore + 1);
      // alert("Correct!");
    } else {
      // alert("Wrong!");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        select hanja for
        <h2>
          {"< "}
          {randomItem.title}
          {" >"}
        </h2>
        Your Score is {score}
        <div className="image-container">
          {randomHanjaImages.map((image) => (
            <div key={image.title} className="image-wrapper">
              <Image
                width={400}
                height={400}
                key={image.title}
                src={image.src}
                alt={image.title}
                className={
                  selectedImage === image.title
                    ? "image selected-image"
                    : "image"
                }
                onClick={() => {
                  handleImageClick(image.title);
                }}
              />
            </div>
          ))}
          {/* <button type="reset" onClick={() => setScore(0)}>
            Reset
          </button> */}
        </div>
      </div>
    </main>
  );
}
