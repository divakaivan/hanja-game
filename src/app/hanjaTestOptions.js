"use client";
import { Button } from "flowbite-react";
import { useState } from "react";
import { selectRandomItems } from "@/app/utils";

const HanjaTestOptions = ({ hanjaLevel }) => {
  const randomHanjaImages = selectRandomItems(hanjaLevel, 4);
  const [currentRandomIndex, setCurrentRandomIndex] = useState(0);
  const randomItem = randomHanjaImages[currentRandomIndex];

  const [gameType, setGameType] = useState(0)
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
      <Button pill={true} gradientMonochrome="success" onClick={()=>setGameType(prevGameType=>!prevGameType)}>모드 변경</Button>
      {gameType == 0 ? (<div>다음 훈과 음에 맞는 한자를 고르십시오
      <p className={"text-4xl"}>
        {"<"}
        {randomItem.title}
        {">"}
      </p></div>) : (<div>다음 훈과 음에 맞는 한자를 고르십시오
  <p className={"text-8xl"}>
  {"<"}
  {randomItem.hanja}
  {">"}
  </p></div>)}
      
      
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
                  {gameType == 0 ? (<p className={"text-8xl"}>{image.hanja}</p>
) : (<p className={"text-4xl"}>{image.title}</p>
)}
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

