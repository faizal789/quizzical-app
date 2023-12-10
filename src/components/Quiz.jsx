import React, { useContext } from "react";
import Question from "./Question";
import FormContext from "./FormContext";
import DataContext from "../DataContext";

const Quiz = () => {
  const { formData, setIsSubmit, isSubmit } = useContext(FormContext);
  const quizData = useContext(DataContext);
  const [count, setCount] = React.useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    const userAnswers = Object.values(formData);
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] == quizData[i].correct_answer) {
        setCount((prevCount) => prevCount + 1);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div>
        <Question></Question>
      </div>
      {isSubmit ? (
        <div className="flex max-sm:flex-col items-center gap-6">
          <p className="text-xl font-bold text-[#293264]">
            You scored {count}/{quizData.length} correct answers
          </p>
          <a
            href="quizzical-app"
            className="rounded-lg bg-[#4D5B9E] py-3 px-5 text-white hover:opacity-70"
          >
            Play again
          </a>
        </div>
      ) : (
        <button className="rounded-lg bg-[#4D5B9E] py-3 px-5 text-white hover:opacity-70">
          Check answers
        </button>
      )}
    </form>
  );
};

export default Quiz;
