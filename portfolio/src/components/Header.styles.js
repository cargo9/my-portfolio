import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 2px solid #6366f1;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const LogoIcon = styled.span`
  font-size: 2rem;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;

export const LogoText = styled.span`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled.a`
  color: #a1a1aa;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #6366f1;
  }

  /* Підкреслення при hover */
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6366f1;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
