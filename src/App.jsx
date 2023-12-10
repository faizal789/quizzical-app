import React from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import { useQuery } from "@tanstack/react-query";
import DataContext from "./DataContext";
import FormProvider from "./components/FormProvider";
import Footer from "./components/Footer";

const fetchQuizData = async (params) => {
  const resp = await fetch(
    `https://opentdb.com/api.php?amount=5&category=${params.selectedOptionCategory}&difficulty=${params.selectedOptionDifficulty}&type=${params.selectedOptionType}`
  );
  const data = await resp.json();
  return data;
};

function App() {
  const [isStart, setIsStart] = React.useState(false);
  const [customQuiz, setCustomQuiz] = React.useState({
    selectedOptionCategory: "",
    selectedOptionDifficulty: "",
    selectedOptionType: "",
  });
  const { data, isLoading, error } = useQuery({
    queryKey: ["getQuizData", { customQuiz }],
    queryFn: () => fetchQuizData(customQuiz),
    staleTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className="text-3xl flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.results.length === 0) {
    return (
      <div className=" flex flex-col gap-3 justify-center items-center h-screen">
        <p className="text-3xl">data not available</p>
        <a href="https://faizal789.github.io/quizzical-app/" className="rounded-lg bg-[#4D5B9E] py-2 px-5 text-white hover:opacity-70">
          Try again
        </a>
      </div>
    );
  }

  return (
    <DataContext.Provider value={data.results}>
      <FormProvider>
        <main
          className={`bg-[#F5F7FB] relative z-0 ${
            isStart
              ? "p-32 max-sm:p-10 h-full"
              : "flex justify-center items-center h-screen"
          }`}
        >
          <img
            src="assets/yellow.png"
            alt="yellow"
            className="absolute top-0 right-0 -z-10"
          />
          <img
            src="assets/bluewhite.png"
            alt="bluewhite"
            className="absolute bottom-0 left-0 -z-10"
          />
          {isStart ? (
            <Quiz></Quiz>
          ) : (
            <Intro
              setIsStart={setIsStart}
              setCustomQuiz={setCustomQuiz}
            ></Intro>
          )}
          <Footer></Footer>
        </main>
      </FormProvider>
    </DataContext.Provider>
  );
}

export default App;
