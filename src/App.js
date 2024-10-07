import React, { useState } from "react";

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: "center" }}>Login oldunuz.</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClickNumber = (number) => {
    const newInput = input + number;
    setInput(newInput);

    if (newInput.length === 4) {
      if (newInput === combination.join("")) {
        setIsCorrect(true);
      } else {
        alert("Hatalı kombinasyon yaptınız");
        setInput("");
      }
    }
  };

  return (
    <div>
      <div>
        {isCorrect ? (
          <NextScreen />
        ) : (
          <div
            style={{
              width: "300px",
              height: "100px",
              textAlign: "center",
              margin: "0 auto",
              fontSize: "50px",
              border: "1px solid black",
            }}
          >
            {input}
          </div>
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "20px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        {!isCorrect &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <button
              key={item}
              onClick={() => handleClickNumber(item)}
              style={{
                cursor: "pointer",
                border: "1px solid black",
                padding: "20px",
                margin: "5px",
                fontSize: "24px",
                backgroundColor: "#4CAF50",
                color: "white",
                width: "100%",
              }}
            >
              {item}
            </button>
          ))}
        {!isCorrect && (
          <button
            onClick={() => handleClickNumber(0)}
            style={{
              border: "1px solid black",
              padding: "20px",
              margin: "5px",
              fontSize: "24px",
              width:'100%',
              gridColumn: "2/3",
              backgroundColor: "gray",
            }}
          >
            0
          </button>
        )}
      </div>
    </div>
  );
};


export default App;
