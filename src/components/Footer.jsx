import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
    }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: wheat;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  @media only screen and (max-width: 380px) {
    display: none;
    }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  @media only screen and (max-width: 380px) {
    background-color:#f3eded;
    }
`;

const ContactItem =  styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;


`
// const Payment = styled.img``



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Tanvir.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          voluptatum aperiam fugit excepturi? Excepturi .
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms and Condition</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          
          <Room style={{ marginRight:"10px" }} />
          Khulshi 1, Chittagon, Bangladesh.
        </ContactItem>
        <ContactItem>
          
          <Phone style={{ marginRight:"10px" }}/>
          01795148654
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight:"10px" }} />
          tanvirchy4242@gmail.com
        </ContactItem>
        {/* <Payment src="https://visualmodo.com/wp-content/uploads/2019/01/PayPal-Payment-Requests-Usage-Guide.png" /> */}
      </Right>
    </Container>
  );
};

export default Footer;
