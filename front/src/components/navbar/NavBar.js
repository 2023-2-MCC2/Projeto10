import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../logo/Logo";
import Navegacao from "./NavItems";
import Button from "../button/Button";
import { doacaoLink } from "../../assets/Assets";

const NavStyle = styled.nav`
  margin: auto;
  padding: 1.3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: var(--primary-color-extra-light);
  position: relative;

  @media (max-width: 927px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const HamburgerIcon = styled(AiOutlineMenu)`
  display: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 20%;
  background-color: var(--white);

  @media (max-width: 927px) {
    display: block;
    position: absolute;
    top: 2.3rem;
    left: 1rem;
  }

  @media (max-width: 768px) {
    top: 1.8rem;
    left: 0.8rem;
  }

  @media (max-width: 480px) {
    top: 1.5rem;
    left: 0.6rem;
  }
`;

const MobileMenu = styled.div`
  display: ${({ $mobileMenuOpen }) => ($mobileMenuOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--primary-color-extra-light);
  border-top: 1px solid var(--white);
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
`;

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 927);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth > 927);
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <NavStyle>
      <Logo />
      <HamburgerIcon size={35} onClick={toggleMobileMenu} />
      <MobileMenu $mobileMenuOpen={mobileMenuOpen}>
        <Navegacao />
        <Button text="Doe Aqui" size="large" to={doacaoLink} external={true} />
      </MobileMenu>
      {isDesktop && (
        <>
          <Navegacao />
          <Button text="Doe Aqui" size="small" to={doacaoLink} external={true} />
        </>
      )}
    </NavStyle>
  );
};

export default NavBar;