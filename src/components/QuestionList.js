import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionsToDisplay}) {  
  //const [questions, setQuestions] = useState([])



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionsToDisplay.map((question)=>(
          <QuestionItem 
          question={question}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
