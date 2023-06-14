import React, { useState } from "react";

const CheckboxComponent: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  };

  return (
    <div className="row ">
      <label className="col" style={{ whiteSpace: "nowrap" }}>
        <input
          type="checkbox"
          value="option1"
          checked={checkboxes.includes("option1")}
          onChange={handleCheckboxChange}
        />
        Materia Prima
      </label>
      <br />
      <label className="col">
        <input
          type="checkbox"
          value="option2"
          checked={checkboxes.includes("option2")}
          onChange={handleCheckboxChange}
        />
        Cajas
      </label>
      <br />
      <label className="col" style={{ whiteSpace: "nowrap" }}>
        <input
          type="checkbox"
          value="option3"
          checked={checkboxes.includes("option3")}
          onChange={handleCheckboxChange}
        />
        Materiales
      </label>
      <br />
      <label className="col">
        <input
          type="checkbox"
          value="option4"
          checked={checkboxes.includes("option4")}
          onChange={handleCheckboxChange}
        />
        Servicio
      </label>
      <br />
      <label className="col">
        <input
          type="checkbox"
          value="option5"
          checked={checkboxes.includes("option5")}
          onChange={handleCheckboxChange}
        />
        Otros
      </label>
    </div>
  );
};

export default CheckboxComponent;
