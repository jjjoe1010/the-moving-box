"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mainImage, setMainImage] = useState("/Biff.jpg");
  const [text, setText] = useState("Would you be my Girlfriend?");
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [imageSize, setImageSize] = useState(100);
  const [location, setLocation] = useState({ x: 0, y: 0 });

  const BOX_W = 150;
  const BOX_H = 300;

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setLocation({
      x: innerWidth / 2 - BOX_W / 2,
      y: innerHeight / 2 - BOX_H / 2,
    });
  }, []);

  function cordinates() {
    const { innerWidth, innerHeight } = window;
    const maxX = Math.max(innerWidth - BOX_W, 0);
    const maxY = Math.max(innerHeight - BOX_H, 0);

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  }

  return (
    <div
      className="h-dvh"
      style={{
        backgroundImage: 'url("/heart-background.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <main
        id="box"
        style={{
          position: "absolute",
          left: location.x,
          top: location.y,
          transition: "left .25s ease, top .25s ease",
        }}
      >
        <div className="flex flex-col items-center">
          <Image
            src={mainImage}
            alt="Biff image"
            width={imageSize}
            height={imageSize}
            priority
          />
          <p className="py-5 text-black font-bold">{text}</p>
        </div>
        {buttonsVisible && (
          <div className="flex justify-center py">
            <button
              className="mr-8 bg-red-300 rounded-full font-bold py-2 px-4"
              onClick={() => {
                setButtonsVisible(false);
                setMainImage("/frogs-dancing.png");
                setText("Congratulations!I am all yours now ( ≧ω≦)/");
                setImageSize(300);
              }}
            >
              <span>Yesss!</span>
            </button>

            <button
              className="bg-red-500 rounded-full font-bold py-2 px-4"
              onClick={() => setLocation(cordinates())}
            >
              No!
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
