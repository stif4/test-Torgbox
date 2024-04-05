import React from "react";

export interface IRefs {
  hr: HTMLDivElement | null;
  mn: HTMLDivElement | null;
  sc: HTMLDivElement | null;
}

const DEGREE_OF_ROTATION = 6;

export default function useMehanicalClock() {
  const refs = React.useRef<IRefs>(null);

  const setHandsOfClock = (ss: number, mm: number, hh: number) => {
    let degSs = ss * DEGREE_OF_ROTATION;
    let degMm = mm * DEGREE_OF_ROTATION;
    let degHh = hh * 30 + mm / 12;

    if (refs) {
      refs.current.hr.style.transform = `rotateZ(${degHh}deg)`;
      refs.current.mn.style.transform = `rotateZ(${degMm}deg)`;
      refs.current.sc.style.transform = `rotateZ(${degSs}deg)`;
    }
  };

  return { refs, setHandsOfClock };
}
