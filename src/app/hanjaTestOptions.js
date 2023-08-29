"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { selectRandomItems } from "@/app/utils";

const HanjaTestOptions = ({ hanjaLevel }) => {
  const randomHanjaImages = selectRandomItems(hanjaLevel, 4);
  // const randomIndex = Math.floor(Math.random() * randomHanjaImages.length);
  // const randomItem = randomHanjaImages[randomIndex];

  const [currentRandomIndex, setCurrentRandomIndex] = useState(0);
  const randomItem = randomHanjaImages[currentRandomIndex];

  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [guessesLeft, setGuessesLeft] = useState(3);

  const handleImageClick = (selectedImageTitle, selectedImageHanja) => {
    if (selectedImageTitle === randomItem.title) {
      setScore((prevScore) => prevScore + 1);
      setResult("맞습니다! " + selectedImageTitle + " = " + selectedImageHanja);
      setCurrentRandomIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % randomHanjaImages.length;
        return newIndex;
      });
    } else {
      setGuessesLeft((previousGuessesLeft) => previousGuessesLeft - 1);
      setResult(
        "아쉽다! " +
          selectedImageHanja +
          " = " +
          selectedImageTitle +
          "! 정답은 " +
          hanjaLevel.find((hanja) => hanja.title === randomItem.title).title +
          " = " +
          randomItem.hanja
      );
      setCurrentRandomIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % randomHanjaImages.length;
        return newIndex;
      });
    }
  };

  return (
    <div className="text-center">
      다음 훈과 음에 맞는 한자를 고르십시오
      <p className={"text-4xl"}>
        {"<"}
        {randomItem.title}
        {">"}
      </p>
      <p>{score}점</p>
      <p>{guessesLeft}번 남으셨어요</p>
      <p className="flex flex-wrap justify-around gap-3 ">
        {randomHanjaImages.map((image) => (
          <Button
            disabled={guessesLeft === 0}
            gradientMonochrome="success"
            size={"xl"}
            pill={true}
            key={image.hanja}
            alt={image.hanja}
            onClick={() => {
              handleImageClick(image.title, image.hanja);
            }}
          >
            <p className={"text-8xl"}>{image.hanja}</p>
          </Button>
        ))}
      </p>
      <p>{result}</p>
      <div>
        {guessesLeft === 0 && (
          <Button
            color={"failure"}
            onClick={() => {
              setGuessesLeft(3), setScore(0), setResult("화이팅!!!");
            }}
          >
            다시 해 보세요!
          </Button>
        )}
      </div>
    </div>
  );
};

export default HanjaTestOptions;
