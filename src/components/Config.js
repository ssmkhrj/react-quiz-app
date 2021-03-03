import {
  QuesTitle,
  QuesList,
  QuesListItem,
  Container,
  ColoredPaper,
  StyledLink,
} from "./CustomComponents";
import styled from "styled-components";

const NUM_QUESTIONS = [10, 20, 30, 40, 50];
const DIFFICULTY_LEVELS = ["any", "easy", "medium", "hard"];

const ConfigQuesList = styled(QuesList)`
  font-weight: 500;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  }
`;

export default function Config({
  totalQues,
  setTotalQues,
  difficulty,
  setDifficulty,
}) {
  return (
    <Container>
      <StyledLink to="category">Back</StyledLink>
      <ColoredPaper>
        <QuesTitle>Select total no. of questions</QuesTitle>
        <ConfigQuesList>
          {NUM_QUESTIONS.map((q, ind) => (
            <QuesListItem
              key={ind}
              isSelected={q === totalQues}
              onClick={() => setTotalQues(q)}
              onKeyDown={(e) => e.code === "Enter" && setTotalQues(q)}
              tabIndex="0"
            >
              {q}
            </QuesListItem>
          ))}
        </ConfigQuesList>
        <QuesTitle>Select Difficulty</QuesTitle>
        <ConfigQuesList>
          {DIFFICULTY_LEVELS.map((level, ind) => (
            <QuesListItem
              key={ind}
              isSelected={level === difficulty}
              onClick={() => setDifficulty(level)}
              onKeyDown={(e) => e.code === "Enter" && setDifficulty(level)}
              tabIndex="0"
            >
              {level}
            </QuesListItem>
          ))}
        </ConfigQuesList>
      </ColoredPaper>
      <StyledLink to="question/1">Start Quiz</StyledLink>
    </Container>
  );
}
