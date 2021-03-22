import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import NasaLogo from "../atoms/SVG/NasaLogo";

const Header = () => {
  return (
    <HeaderContainer>
      <NasaLogo />
      <Title>NASA’s NeoWs Challenge</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
  border-bottom: solid 1px ${color.softGrey};
  & svg {
    height: 40px;
    margin: 5px;
  }
`;

const Title = styled.h1`
  margin-top: 10px;
`;
