"use client";

import { Card } from "flowbite-react";

const HanjaDictionary = ({ hanjaLevel }) => {
  return (
    // <main className="flex justify-center items-center p-9">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-9">
      {hanjaLevel.map((hanja) => (
        <div key={hanja.title} className="h-auto max-w-full rounded-lg">
          <Card className="text-center text-black">
            <p className="text-2xl font-bold">{hanja.hanja}</p>
            <p>{hanja.title}</p>
            <a
              className="text-xs text-blue-203"
              target="_blank"
              href={`https://koreanhanja.app/${hanja.hanja}`}
            >
              더 보기
            </a>
          </Card>
        </div>
      ))}
    </div>
    // </main>
  );
};

export default HanjaDictionary;
