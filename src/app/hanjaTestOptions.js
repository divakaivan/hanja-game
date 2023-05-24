"use client";
import { Button } from "flowbite-react";
import { useState } from "react";
import { selectRandomItems } from "@/app/utils";

const HanjaTestOptions = ({ hanjaLevel }) => {
  const randomHanjaImages = selectRandomItems(hanjaLevel, 4);
  const randomIndex = Math.floor(Math.random() * randomHanjaImages.length);
  const randomItem = randomHanjaImages[randomIndex];

  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const handleImageClick = (selectedImageTitle, selectedImageHanja) => {
    if (selectedImageTitle === randomItem.title) {
      setScore((prevScore) => prevScore + 1);
      setResult("Correct! " + selectedImageTitle + " is " + selectedImageHanja);
    } else {
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
      <p className="flex flex-wrap justify-around gap-3 ">
        {randomHanjaImages.map((image) => (
          <Button
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
    </div>
  );
};

export default HanjaTestOptions;
