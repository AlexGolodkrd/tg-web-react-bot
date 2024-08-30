import React from "react";
import "./Form.css";

const Form = () => {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [subject, setSubject] = useState("physical");
  return (
    <div className={"form"}>
      <h3>Введите данные</h3>
      <input className={"i"} type="text" placeholder={"Страна"} />
      <input className={"i"} type="text" placeholder={"Улица"} />
      <select className={"select"}>
        <option value="physical">Юр.лицо</option>
        <option value="legal">Физ.лицо</option>
      </select>
    </div>
  );
};

export default Form;
