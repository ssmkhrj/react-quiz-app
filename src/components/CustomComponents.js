import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const QuesTitle = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-size: var(--fs-regular);
  line-height: 1.4;

  ${({ large }) =>
    large &&
    css`
      font-size: var(--fs-large);
    `}
`;

export const QuesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75em;
  margin: 0.5em 0 2em;
  list-style: none;
  text-align: center;
`;

export const QuesListItem = styled.li`
  padding: 0.35em;
  border-radius: 20em;
  background: var(--clr-dark);
  text-transform: capitalize;
  cursor: pointer;

  &:focus {
    outline: 1.5px solid var(--clr-accent);
    outline-offset: 3px;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--clr-accent);
      color: var(--clr-dark);
    `};

  ${({ reviewPage }) =>
    reviewPage &&
    css`
      cursor: default;
    `};

  ${({ isSelected, reviewPage }) =>
    isSelected &&
    reviewPage &&
    css`
      background-color: var(--clr-incorrect);
      color: var(--clr-dark);
    `};

  ${({ isCorrect }) =>
    isCorrect &&
    css`
      background-color: var(--clr-correct);
      color: var(--clr-dark);
    `};
`;

export const ColoredPaper = styled.div`
  padding: 1.5em;
  margin: 1em 0;
  border-radius: 4px;
  background: var(--clr-light);
  color: var(--clr-text);

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const StyledButton = styled.button`
  padding: 0.5em 1.75em;
  border: none;
  border-radius: 0.3em;
  background: var(--clr-accent);
  color: var(--clr-dark);
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    outline: 1.5px solid var(--clr-accent);
    outline-offset: 3px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5em 1.75em;
  border: none;
  border-radius: 0.3em;
  background: var(--clr-accent);
  color: var(--clr-dark);
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: 1.5px solid var(--clr-accent);
    outline-offset: 3px;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

export const Container = styled.div`
  width: 90%;
  margin: 3em auto;
  max-width: 650px;
`;
