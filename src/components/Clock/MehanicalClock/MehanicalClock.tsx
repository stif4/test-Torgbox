import React from "react";
import "./MehanicalClock.scss";
import { IRefs } from "src/widget/Clock/hooks/useMehanicalClock";

const MehanicalClock = React.forwardRef<IRefs>((_, refs) => {
  const hr = React.useRef<HTMLDivElement | null>(null);
  const mn = React.useRef<HTMLDivElement | null>(null);
  const sc = React.useRef<HTMLDivElement | null>(null);

  React.useImperativeHandle(refs, () => ({
    hr: hr.current,
    mn: mn.current,
    sc: sc.current,
  }));

  return (
    <div className="Mclock">
      <div className="Mclock__hour">
        <div className="Mclock__hr" ref={hr} />
      </div>
      <div className="Mclock__min">
        <div className="Mclock__mn" ref={mn} />
      </div>
      <div className="Mclock__sec">
        <div className="Mclock__sc" ref={sc} />
      </div>
    </div>
  );
});

export default MehanicalClock;
