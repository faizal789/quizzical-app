import React from "react";

const Intro = ({ setIsStart, setCustomQuiz}) => {
  const [selectedOptionCategory, setSelectedOptionCategory] =
    React.useState("");
  const [selectedOptionDifficulty, setSelectedOptionDifficulty] =
    React.useState("");
  const [selectedOptionType, setSelectedOptionType] = React.useState("");

  const handleSelectChangeCategory = (event) => {
    setSelectedOptionCategory(event.target.value);
  };

  const handleSelectChangeDifficulty = (event) => {
    setSelectedOptionDifficulty(event.target.value);
  };

  const handleSelectChangeType = (event) => {
    setSelectedOptionType(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCustomQuiz({
      selectedOptionCategory,
      selectedOptionDifficulty,
      selectedOptionType,
    });

    setIsStart(true);
  }

  return (
    <div className="text-center flex flex-col gap-5">
      <h1 className="text-5xl font-medium text-[#293264]">Quizzical</h1>
      <p className="text-xl text-[#293264]">Custom your quiz</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <select
            value={selectedOptionCategory}
            onChange={handleSelectChangeCategory}
            className="p-3 rounded-lg text-lg text-[#293264] cursor-pointer w-full max-sm:w-10/12 hover:opacity-70"
          >
            <option value="">Select Category...</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Book</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musical & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematic</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vechiles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
        </div>
        <div>
          <select
            value={selectedOptionDifficulty}
            onChange={handleSelectChangeDifficulty}
            className="p-3 rounded-lg text-lg text-[#293264] cursor-pointer w-full max-sm:w-10/12 hover:opacity-70"
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <select
            value={selectedOptionType}
            onChange={handleSelectChangeType}
            className="p-3 rounded-lg text-lg text-[#293264] cursor-pointer w-full max-sm:w-10/12 hover:opacity-70"
          >
            <option value="">Select Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>
        <button className="text-white mx-auto w-full text-xl py-3 px-16 rounded-xl max-sm:w-10/12 bg-[#4D5B9E] hover:opacity-70">
          Start quiz
        </button>
      </form>
    </div>
  );
};

export default Intro;
