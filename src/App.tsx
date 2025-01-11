import Lamp from "./components/Lamp";
import Portrait from "./components/Portrait";
import Galaxy from "./components/Galaxy";
import { useState } from "react";
import stars from "./stars.png";

export default function App() {
  const [isOpen, setOpen] = useState<boolean>(true);
  return (
    <div>
      <Lamp isOpen={isOpen} setOpen={setOpen} />
      <Portrait
        isOpen={isOpen}
        title="Orbital Odyssey"
        author="Doth-J"
        link="https://github.com/Doth-J"
        width="550px"
        height="350px"
      >
        <div
          className={`container ${isOpen ? "on" : "off"}`}
          style={{ backgroundImage: `url(${stars})` }}
        >
          <Galaxy isOpen={!isOpen} />
        </div>
      </Portrait>
    </div>
  );
}
