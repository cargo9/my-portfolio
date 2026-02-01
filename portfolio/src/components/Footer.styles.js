import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: rgba(18, 18, 18, 0.95);
  border-top: 2px solid #6366f1;
  padding: 3rem 3rem 2rem;
  margin-top: 4rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FooterLink = styled.a`
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #6366f1;
    transform: translateX(5px);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px;
  color: #a1a1aa;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: #6366f1;
    color: #6366f1;
    transform: translateY(-3px);
  }
`;

export const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  text-align: center;
  color: #a1a1aa;
  font-size: 0.9rem;
`;

export const Copyright = styled.p`
  margin: 0;

  span {
    color: #6366f1;
    font-weight: bold;
  }
`;
