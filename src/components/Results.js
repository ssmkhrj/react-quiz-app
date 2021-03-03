import {
  Container,
  ColoredPaper,
  StyledLink,
  SpaceBetween,
} from "./CustomComponents";

export default function Results({ stats }) {
  const total = stats.length;
  const correct = stats.filter((r) => r.correct === r.userAns).length;
  const skipped = stats.filter((r) => !r.userAns).length;
  const incorrect = total - correct - skipped;
  return (
    <Container>
      <ColoredPaper>
        <SpaceBetween
          style={{ marginBottom: 0, fontSize: "1.2em", fontWeight: 500 }}
        >
          <p>Total Questions</p>
          <p style={{ color: "var(--clr-accent)" }}>{total}</p>
        </SpaceBetween>
      </ColoredPaper>
      <ColoredPaper>
        <SpaceBetween
          style={{ marginBottom: 0, fontSize: "1.2em", fontWeight: 500 }}
        >
          <p>Correct Answers</p>
          <p style={{ color: "var(--clr-accent)" }}>{`${correct}/${total}`}</p>
        </SpaceBetween>
      </ColoredPaper>
      <ColoredPaper>
        <SpaceBetween
          style={{ marginBottom: 0, fontSize: "1.2em", fontWeight: 500 }}
        >
          <p>Incorrect Answers</p>
          <p
            style={{ color: "var(--clr-accent)" }}
          >{`${incorrect}/${total}`}</p>
        </SpaceBetween>
      </ColoredPaper>
      <ColoredPaper>
        <SpaceBetween
          style={{ marginBottom: 0, fontSize: "1.2em", fontWeight: 500 }}
        >
          <p>Skipped Questions</p>
          <p style={{ color: "var(--clr-accent)" }}>{`${skipped}/${total}`}</p>
        </SpaceBetween>
      </ColoredPaper>
      <SpaceBetween>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/review-answers">Review Answers</StyledLink>
      </SpaceBetween>
    </Container>
  );
}
