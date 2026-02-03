import {
  StyledHeader,
  Logo,
  LogoIcon,
  LogoText,
  Nav,
  NavLink,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <LogoIcon>💻</LogoIcon>
        <LogoText>MyPortfolio</LogoText>
      </Logo>

      <Nav>
        <NavLink href="#skills">Навички</NavLink>
        <NavLink href="#setup">Проєкти</NavLink>
        <NavLink href="#footer">Контакт</NavLink>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
