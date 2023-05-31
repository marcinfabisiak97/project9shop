import styled from "styled-components";
import Navbar from "../components/Navbar";
import PromoInfo from "../components/PromoInfo";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Container = styled.div``;
const Title = styled.h2`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 10px;
  margin-left: 10px;
`;
const Option = styled.option``;
const ProductsList = () => {
  return (
    <Container>
      <Navbar />
      <PromoInfo />
      <Title>Bumpers</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              numbers
            </Option>
            <Option>one</Option>
            <Option>two</Option>
            <Option>three</Option>
            <Option>four</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>price</Option>
            <Option>asc</Option>
            <Option>desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductsList;
