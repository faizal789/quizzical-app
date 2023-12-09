import React, { useContext, useRef } from "react";
import FormContext from "./FormContext";
import DataContext from "../DataContext";

const decodeHtmlEntities = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.documentElement.textContent;
};

const RadioGroup = ({ answer, name, id }) => {
  const { setFormData, formData, isSubmit } = useContext(FormContext);
  const quizData = useContext(DataContext);
  const handleRadioChange = (groupName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [groupName]: value,
    }));
  };
  const ArrFormData = Object.values(formData);
  const decodeCorrectAnswer = decodeHtmlEntities(quizData[name].correct_answer);

  return (
    <section>
      <input
        name={name}
        id={id}
        type="radio"
        value={answer}
        onChange={() => handleRadioChange(name, answer)}
        hidden={true}
        className="hidden peer"
        disabled={isSubmit ? true : false}
      />
      <label
        htmlFor={id}
        className={`border-2 border-[#4D5B9E] py-2 px-4 rounded-xl whitespace-nowrap ${
          isSubmit
            ? ArrFormData[name] === decodeCorrectAnswer
              ? "peer-checked:bg-[#94D7A2] cursor-default"
              : ArrFormData[name] === answer
              ? "peer-checked:bg-[#F8BCBC] cursor-default opacity-70"
              : ""
            : "peer-checked:bg-[#D6DBF5] cursor-pointer"
        } ${
          isSubmit
            ? decodeCorrectAnswer === answer
              ? "bg-[#94D7A2] border-transparent font-medium cursor-default"
              : " opacity-70 cursor-default"
            : " cursor-pointer"
        }  peer-checked:border-transparent`}
      >
        {answer}
      </label>
    </section>
  );
};

export default RadioGroup;
