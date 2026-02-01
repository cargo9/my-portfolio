import styled from "styled-components";

export const ProgectSection = styled.section`
  padding: 4rem 3rem;
  background: linear-gradient(360deg, #121212 0%, #16213e 100%);
`;

export const ProgectTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ProgectIcon = styled.span`
  font-size: 3rem;
`;

export const ProgectUrl = styled.a`
  color: #0011ff;
`;

export const ProgectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProgectCard = styled.div`
  background: rgba(30, 30, 30, 0.8);
  padding: 2.5rem;
  border-radius: 20px;
  border: 2px solid transparent;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  /* Gradient border */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    /* background: linear-gradient(135deg, #6366f1, #8b5cf6); */
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow:
      0 20px 50px rgba(99, 102, 241, 0.4),
      0 0 0 1px rgba(99, 102, 241, 0.1);
  }
`;

export const ProgectEmoji = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3));
`;

export const ProgectName = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ProgectDescription = styled.p`
  color: #a1a1aa;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ProgectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProgectTag = styled.span`
  background: rgba(99, 102, 241, 0.2);
  color: #a5b4fc;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;

  ${ProgectCard}:hover & {
    background: rgba(99, 102, 241, 0.3);
    border-color: #6366f1;
    color: #c7d2fe;
  }
`;
