import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { CategoryItemProps } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Categories: React.FC = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
