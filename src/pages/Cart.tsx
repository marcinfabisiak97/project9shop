import styled from "styled-components";
import Navbar from "../components/Navbar";
import PromoInfo from "../components/PromoInfo";
import Footer from "../components/Footer";
import Images from "../assets/exportFiles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
type ButtonProps = {
  buttonType?: "filled";
};
type SummaryItemProps = {
  type?: string;
};
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button<ButtonProps>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.buttonType === "filled" ? "none" : null)};
  background-color: ${(props) =>
    props.buttonType === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.buttonType === "filled" ? "white" : null)};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Information = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #5a5959;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
`;
const SummaryTitle = styled.h2`
  font-weight: 200;
`;
const SummaryItem = styled.div<SummaryItemProps>`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? 500 : null)};
  font-size: ${(props) => (props.type === "total" ? "24px" : null)};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <PromoInfo />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton buttonType="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Information>
            <Product>
              <ProductDetail>
                <Image src={Images.blender} />
                <Details>
                  <ProductName>
                    <b>Product:</b>Blender
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>455475
                  </ProductId>
                  <ProductColor color="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>100PLN</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={Images.blender} />
                <Details>
                  <ProductName>
                    <b>Product:</b>Blender
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>455475
                  </ProductId>
                  <ProductColor color="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>100PLN</ProductPrice>
              </PriceDetail>
            </Product>
          </Information>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>100PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>5.90PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-5.90PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>100PLN</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
