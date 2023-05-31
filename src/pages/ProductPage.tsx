import styled from "styled-components";
import Navbar from "../components/Navbar";
import PromoInfo from "../components/PromoInfo";
import Footer from "../components/Footer";
import Images from "../assets/exportFiles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: 0 50px;
`;
const Title = styled.h2`
  font-size: 25px;
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const Price = styled.p`
  font-weight: 100;
`;
const FilterContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
`;

const FilterTitle = styled.span``;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const AddContainer = styled.div`
  display: flex;
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #d6d4d4;
  }
`;
const ProductPage = () => {
  return (
    <Container>
      <Navbar />
      <PromoInfo />
      <Wrapper>
        <ImageContainer>
          <Image src={Images.blender} />
        </ImageContainer>
        <InfoContainer>
          <Title>Blender</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis iure sint distinctio aliquam provident voluptatum cum
            quidem, odit quae possimus aperiam iste. Iure soluta ad deserunt ea
            officiis debitis dolore.
          </Description>
          <Price>100 PLN</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="blue" />
              <FilterColor color="green" />
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductPage;
