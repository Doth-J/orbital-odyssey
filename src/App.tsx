import React from "react";
import { useState } from "react";
import Lamp from "./components/Lamp";
import useTitle from "./hooks/useTitle";
import Portrait from "./components/Portrait";
import Creator from "./components/Creator";
import Galaxy from "./components/Galaxy";
import AudioPlayer from "./components/AudioPlayer";

export default function App({ title }: { title: string }) {
  useTitle(title);
  const [isOpen, setOpen] = useState<boolean>(true);

  return (
    <div className={`display`}>
      <Lamp isOpen={isOpen} width={625} setOpen={setOpen} />
      <Portrait isOpen={isOpen} title={title}>
        <div className={`container ${isOpen ? "on" : "off"}`}>
          <Galaxy isOpen={!isOpen} />
        </div>
      </Portrait>
      <Creator
        isOpen={isOpen}
        creator="Developed by Doth-J"
        link="https://github.com/Doth-J"
      >
        <AudioPlayer isOpen={!isOpen} source="./voyage.mp3" />
      </Creator>
    </div>
  );
}
