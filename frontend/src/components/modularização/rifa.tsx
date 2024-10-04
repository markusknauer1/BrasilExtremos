import React, { useState } from "react";

interface RifaOption {
  id: number;
  selected: boolean;
}

const generateOptions = (num: number): RifaOption[] => {
  return Array.from({ length: num }, (_, index) => ({
    id: index + 1,
    selected: false,
  }));
};

const Rifas: React.FC = () => {
  const [options, setOptions] = useState<RifaOption[]>(generateOptions(50)); // Gera 100 opções

  const handleOptionClick = (id: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, selected: !option.selected } : option
      )
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: "10px",
          maxWidth: "800px",
          padding:"10px",
          margin: "auto",
        }}
      >
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={`raffleButton ${option.selected ? "selected" : ""}`}
          >
            <strong>{option.id}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rifas;
