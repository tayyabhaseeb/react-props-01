import React, { useState } from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 1;

  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);

  if (step > 3) {
    setStep(1);
  }

  if (step < 1) {
    setStep(3);
  }

  return (
    <div>
      <button className="close" onClick={() => setOpen((prev) => !prev)}>
        &times;
      </button>
      <div className="steps" style={{ display: open ? "block" : "none" }}>
        <div className="numbers">
          <div className={step === 1 ? "active" : ""}>1</div>
          <div className={step === 2 ? "active" : ""}>2</div>
          <div className={step === 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => setStep((prev) => prev - 1)}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => setStep((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// style={{ display: open ? "block" : "none" }}
