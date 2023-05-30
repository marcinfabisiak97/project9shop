import styled from "styled-components";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1%;
`;
const Logo = styled.h2`
  margin: 20px 0;
  font-weight: 700;
`;
const Description = styled.p`
  text-align: justify;
`;
const Center = styled.div`
  flex: 1;
  margin-left: 5%;
`;
const Title = styled.h2`
  margin: 20px 0;
  font-weight: 700;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
`;
const Right = styled.div`
  flex: 1;
`;
const Contact = styled.h2``;
const ContactDetails = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  vertical-align: middle;
`;
const Location = styled.div`
  margin-left: 10px;
`;
const Phone = styled.div`
  margin-left: 10px;
`;
const Mail = styled.div`
  margin-left: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FABICO</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo
          blanditiis ipsa veritatis nostrum perspiciatis consequatur nobis id
          officia unde. Voluptatibus expedita, dolor error aliquam laborum
          molestiae velit recusandae magni?
        </Description>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Main</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactDetails>
          <RoomOutlinedIcon />
          <Location>ul. Słoneczna 6 05-530 Sierzchów</Location>
        </ContactDetails>
        <ContactDetails>
          <LocalPhoneIcon />
          <Phone>+48 604 132 689</Phone>
        </ContactDetails>
        <ContactDetails>
          <EmailIcon />
          <Mail>marcinfabisiak123@gmail.com</Mail>
        </ContactDetails>
      </Right>
    </Container>
  );
};

export default Footer;
