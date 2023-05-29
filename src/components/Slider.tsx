import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Images from "../assets/exports";
type ArrowProps = {
  direction: "left" | "right"; // Define the direction prop with valid values
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  position: relative;
`;
const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.direction === "left" ? "10px" : null)};
  right: ${(props) => (props.direction === "right" ? "10px" : null)};
  margin: auto;
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h2``;
const Description = styled.p``;
const Button = styled.button``;
const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src={Images.blender} />
          </ImageContainer>
          <InfoContainer>
            <Title>Blender</Title>
            <Description>Great for hopping</Description>
            <Button>show me</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
