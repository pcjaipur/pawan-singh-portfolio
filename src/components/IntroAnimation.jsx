
import { useEffect, useMemo, useState } from "react";

export default function IntroAnimation({ onFinish }) {

  const greetings = useMemo(
    () => [
      "Hello",
      "नमस्ते",
      "Hola",
      "Bonjour",
      "Ciao",
      "Olá",
      "Merhaba",
      "مرحبا",
      "Γεια",
      "Hej",
      "你好",
      "Привет",
      "안녕하세요",
      "Salam",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer;

    if (index < greetings.length - 1) {

      // Change greeting every 180ms
      timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 180);

    } else {

      // Finish intro after last greeting
      timer = setTimeout(() => {
        setVisible(false);

        // Notify parent after fade-out
        const finishTimer = setTimeout(() => {
          onFinish?.();
        }, 500);

        return () => clearTimeout(finishTimer);

      }, 700);
    }

    return () => clearTimeout(timer);

  }, [index, greetings, onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black
        transition-opacity duration-500
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >

      <h1
        key={index}
        className="
          text-4xl sm:text-6xl
          font-bold
          text-white
          overflow-hidden
          animate-pulse
        "
        initial = {{y:0}}
        exit={{y: "100%, transition:{duration :1.05 , ease :[0.22,1,0.36,1],"}}
      >
        {greetings[index]}
      </h1>

    </div>
  );
}
