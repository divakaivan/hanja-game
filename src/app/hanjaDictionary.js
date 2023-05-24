"use client";

import { Card } from "flowbite-react";

const HanjaDictionary = ({ hanjaLevel }) => {
  return (
    <main className="flex justify-center items-center p-9">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {hanjaLevel.map((hanja) => (
          <div key={hanja.title} className="h-auto max-w-full rounded-lg">
            <Card className="text-center text-black">
              <p className="text-2xl font-bold">{hanja.hanja}</p>
              <p>{hanja.title}</p>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HanjaDictionary;
