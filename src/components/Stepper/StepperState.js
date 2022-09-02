import { useState } from "react";

import "./index.scss";

const steps = [
  { label: "Order" },
  { label: "Payment" },
  { label: "Send" },
  { label: "Delivered" },
];

function DoneIcon() {
  return "✓";
}

function StepContent({ done, index }) {
  return done ? <DoneIcon /> : index + 1;
}

function renderStep({ label }, key) {
  const { current } = this;
  const done = key < current;
  const currentStep = key === current;
  const currentClassName = currentStep ? " stepper__step--current" : "";
  const doneClassName = done ? " stepper__step--done" : "";
  const className = `stepper__step${currentClassName}${doneClassName}`;

  return (
    <li className={className} key={key}>
      <span className="stepper__step__index">
        <StepContent done={done} index={key} />
      </span>
      <h6 className="stepper__step__label">{label}</h6>
    </li>
  );
}

function Stepper({ current, steps }) {
  return <ul className="stepper">{steps.map(renderStep, { current })}</ul>;
}

function StepperState() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(Math.min(current + 1, steps.length));
  };

  const handlePrevious = () => {
    setCurrent(Math.max(current - 1, 0));
  };

  return (
    <>
      <Stepper steps={steps} current={current} />
    </>
  );
}

export default StepperState;
