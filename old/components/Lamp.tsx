import { Dispatch, SetStateAction } from "react";

export default function Lamp({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="lamp-container">
      <div
        className={`holder ${isOpen ? "on flicker-on" : "off flicker-off"}`}
      ></div>
      <div
        className={`lamp ${isOpen ? "on flicker-on " : "off flicker-off"}`}
        onClick={() => setOpen(!isOpen)}
        title={isOpen ? "Turn off lamp" : "Turn on lamp"}
      ></div>
      <div
        className={`light-beam ${isOpen ? "flicker-in" : "flicker-out"}`}
      ></div>
    </div>
  );
}
