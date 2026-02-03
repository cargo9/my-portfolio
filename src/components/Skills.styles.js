import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 4rem 3rem;
  background: #121212;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TitleIcon = styled.span`
  font-size: 3rem;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillCard = styled.div`
  background: rgba(30, 30, 30, 0.6);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    border-color: #6366f1;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  }
`;

export const SkillIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

export const SkillName = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const SkillLevel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const SkillBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  transition: width 1s ease;
  width: ${(props) => props.$level}%;
`;

export const SkillPercent = styled.span`
  color: #6366f1;
  font-weight: bold;
  font-size: 0.9rem;
`;
