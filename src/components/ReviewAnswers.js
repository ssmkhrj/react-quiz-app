import { Container, StyledLink } from "./CustomComponents";

export default function ReviewAnswers({ resultMetrics }) {
  return (
    <Container>
      <StyledLink to="/results">Back</StyledLink>
      {resultMetrics}
    </Container>
  );
}
