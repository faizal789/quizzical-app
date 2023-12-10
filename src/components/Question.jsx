import React, { useContext, useEffect } from "react";
import DataContext from "../DataContext";
import RadioGroup from "./RadioGroup";

const Question = () => {
  const quizData = useContext(DataContext);
  const [shuffledArray, setShuffledArray] = React.useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    const decodeHtmlEntities = (html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.documentElement.textContent;
    };

    const quizzies = quizData.map((quiz) => {
      const answers = [quiz.correct_answer, ...quiz.incorrect_answers];
      const decodeAnswer = answers.map((encodedText) => {
        return decodeHtmlEntities(encodedText);
      });
      const shuffleAnswers = shuffleArray(decodeAnswer);
      const question = quiz.question;
      const decodeQuestion = decodeHtmlEntities(question);
      return {
        question: decodeQuestion,
        shuffleAnswers: shuffleAnswers,
      };
    });

    setShuffledArray(quizzies);
  }, [quizData]);

  return (
    <section className="">
      {shuffledArray.map((element, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-4 border-b-2 pb-7 mb-5 "
          >
            <p className="text-xl font-bold">{element.question}</p>
            <div className="flex gap-4 max-sm:gap-5 flex-wrap">
              {element.shuffleAnswers.map((answer, answerIndex) => {
                return (
                  <RadioGroup
                    answer={answer}
                    key={answerIndex}
                    id={index.toString().concat(answerIndex.toString())}
                    name={index}
                    answerIndex={answerIndex}
                  ></RadioGroup>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Question;
