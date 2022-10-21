import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then(r=>setQuestions(r))
  })

  function handleAddQuestion(newQuestion){
    console.log("from app: ", newQuestion)
    setQuestions([...questions, newQuestion])
    
  }

  const questionsToDisplay = questions.map((question)=>{
    return question
  })

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm 
          onAddQuestion={handleAddQuestion}
        /> : 
        <QuestionList 
          questionsToDisplay={questionsToDisplay}
        />}
    </main>
  );
}

export default App;
