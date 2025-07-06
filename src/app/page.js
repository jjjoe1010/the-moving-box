"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mainImage, setMainImage] = useState("/Biff.jpg");
  const [text, setText] = useState("Would you be my Girlfriend?");
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [imageSize, setImageSize] = useState(150);

  let BOX_W = 210;
  let BOX_H = 400;

  let [location, setLocation] = useState({
    x: window.innerWidth / 2 - BOX_W / 2,
    y: window.innerHeight / 2 - BOX_H / 2,
  });

  let getViewport = () =>
    typeof window !== "undefined"
      ? { w: window.innerWidth, h: window.innerHeight }
      : { w: 0, h: 0 };

  function cordinates() {
    let { w, h } = getViewport();
    let maxX = Math.max(w - BOX_W, 0);
    let maxY = Math.max(h - BOX_H, 0);

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
          <p className="py-5 text-black">{text}</p>
        </div>
        {buttonsVisible && (
          <div className="flex justify-center py">
            <button
              className="mr-8 bg-red-300 rounded-full py-2 px-4"
              onClick={() => {
                setMainImage("/frogs-dancing.png");
                setText("Congradulations!");
                setButtonsVisible(false);
                setImageSize(400);
              }}
            >
              <span>Yesss!</span>
            </button>

            <button
              className="bg-red-500 rounded-full py-2 px-4"
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
