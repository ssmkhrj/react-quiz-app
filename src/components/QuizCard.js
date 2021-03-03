import { decode } from "html-entities";
import {
  QuesTitle,
  QuesList,
  QuesListItem,
  ColoredPaper,
  SpaceBetween,
} from "./CustomComponents";
import "../styles/QuizCard.css";

export default function QuizCard({
  id,
  ques,
  answer,
  toShow,
  handleAnswer,
  reviewPage,
}) {
  return (
    <ColoredPaper hide={!toShow && !reviewPage}>
      <SpaceBetween>
        <span className="ques-num">{id + 1}</span>
        {reviewPage && (
          <span
            style={{
              textTransform: "uppercase",
              color: "var(--clr-accent)",
              fontWeight: 500,
            }}
          >
            {answer.userAns
              ? answer.userAns === ques.correct_answer
                ? "Correct"
                : "Incorrect"
              : "Skipped"}
          </span>
        )}
      </SpaceBetween>
      <QuesTitle large>{decode(ques.question)}</QuesTitle>
      <QuesList>
        {answer.ansOptions.map((opt, index) => (
          <QuesListItem
            key={index}
            isSelected={answer.userAns === opt}
            onClick={() => !reviewPage && handleAnswer(id, opt)}
            onKeyDown={(e) => e.code === "Enter" && handleAnswer(id, opt)}
            reviewPage={reviewPage}
            isCorrect={reviewPage && opt === ques.correct_answer}
            tabIndex={reviewPage ? -1 : 0}
          >
            {decode(opt)}
          </QuesListItem>
        ))}
      </QuesList>
    </ColoredPaper>
  );
}
