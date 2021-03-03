import CategoryCard from "./CategoryCard";
import "../styles/Categories.css";
import categories from "../data/categories";
import {
  QuesTitle,
  StyledLink,
  Container,
  SpaceBetween,
} from "./CustomComponents";
import styled from "styled-components";

const CategoryQuesTitle = styled(QuesTitle)`
  font-size: 1.5em;
  text-transform: uppercase;
`;

export default function Categories({ selectedCategory, setSelectedCategory }) {
  return (
    <Container>
      <SpaceBetween>
        <CategoryQuesTitle large>Select a category</CategoryQuesTitle>
        <StyledLink
          to="config"
          style={{ visibility: selectedCategory ? "visible" : "hidden" }}
        >
          Next
        </StyledLink>
      </SpaceBetween>
      <ul className="category-container">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            id={cat.id}
            title={cat.name}
            icon={cat.icon}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </ul>
    </Container>
  );
}
