import { useState, useEffect } from "react";
import axios from "axios";
import QuizCard from "./QuizCard";
import {
  Container,
  StyledLink,
  StyledButton,
  SpaceBetween,
} from "./CustomComponents";
import Loader from "./Loader";

const BASE_URL = "https://opentdb.com/api.php";

const shuffleOptions = (options) => {
  // Fisher-Yates Shuffle
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function Quiz({
  category,
  amount,
  difficulty,
  quesNum,
  setResultMetrics,
  setStats,
  history,
}) {
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);

  // Fetching data from URL
  useEffect(() => {
    let URL = `${BASE_URL}?category=${category}&amount=${amount}`;
    if (difficulty !== "any") URL += `&difficulty=${difficulty}`;
    (async function getData() {
      try {
        const res = await axios.get(`${URL}`);
        setQuestions(res.data.results);
      } catch (err) {
        setQuestions([]);
        // So that the useEffect below gets triggered and answer is set to []
        // and loading finishes and error message is displayed
      }
    })();
    // eslint-disable-next-line
  }, []);

  // Once questions is updated with the data from the API, answers is also updated
  useEffect(
    () => {
      if (!questions) return;
      setAnswers(
        questions.map((q) => ({
          userAns: null,
          ansOptions: shuffleOptions(
            q.incorrect_answers.concat(q.correct_answer)
          ),
        }))
      );
    },
    // eslint-disable-next-line
    [questions]
  );

  const handleAnswer = (id, answer) => {
    setAnswers(
      answers.map((ans, index) =>
        index === id
          ? { ...ans, userAns: ans.userAns === answer ? null : answer }
          : ans
      )
    );
  };

  const handleSubmitClick = () => {
    setStats(
      questions.map((q, i) => ({
        correct: q.correct_answer,
        userAns: answers[i].userAns,
      }))
    );
    setResultMetrics(
      <div>
        {answers.map((ans, index) => (
          <QuizCard
            key={index}
            id={index}
            ques={questions[index]}
            answer={ans}
            reviewPage
          />
        ))}
      </div>
    );
    // HOW TO ENSURE HISTORY.PUSH HAPPENS AFTER SETTING STATE
    history.push("/results");
  };

  // This runs when data has not yet been fetched
  if (!answers)
    return (
      <Container>
        <Loader />
      </Container>
    );

  // This runs in two cases:
  // 1) Data is fetched but returned an empty array []
  // 2) Some error occured
  if (!answers.length)
    return (
      <Container style={{ textAlign: "center" }}>
        <p
          style={{
            textTransform: "uppercase",
            marginBottom: "1em",
            fontSize: "var(--fs-large)",
            fontWeight: 500,
          }}
        >
          Something went wrong 😭
        </p>
        <StyledLink to="/">Try again</StyledLink>
      </Container>
    );

  return (
    <Container>
      <SpaceBetween>
        <StyledLink
          to={`${quesNum - 1}`}
          style={{ visibility: quesNum > 1 ? "visible" : "hidden" }}
        >
          Back
        </StyledLink>
        <StyledLink
          to={`${quesNum + 1}`}
          style={{
            visibility: quesNum < questions.length ? "visible" : "hidden",
          }}
        >
          Next
        </StyledLink>
      </SpaceBetween>
      <div>
        {answers.map((ans, index) => (
          <QuizCard
            key={index}
            id={index}
            ques={questions[index]}
            answer={ans}
            toShow={quesNum === index + 1}
            handleAnswer={handleAnswer}
          />
        ))}
      </div>
      <StyledButton onClick={handleSubmitClick}>Submit</StyledButton>
    </Container>
  );
}
