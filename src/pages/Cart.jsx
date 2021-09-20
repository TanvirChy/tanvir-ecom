import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  @media only screen and (max-width: 380px) {
    padding: 10px;
    }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 380px) {
    flex-direction: column;
    }

`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 380px) {
    flex-direction: column;
    }
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
  justify-content: space-between;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  @media only screen and (max-width: 380px) {
    margin: 5px 15px;
    }

`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  @media only screen and (max-width: 380px) {
    margin-bottom: 20px;
    }

`;

const TopTexts = styled.div`

@media only screen and (max-width: 380px) {
    display: none;
    }

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: wheat;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOU BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b> This is wonderfull laptop.{" "}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 26598456
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMERY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>

              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>

              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>

              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>

              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
