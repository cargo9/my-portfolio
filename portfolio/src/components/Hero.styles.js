import styled from "styled-components";

export const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

export const Greeting = styled.div`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Emoji = styled.span`
  font-size: 3rem;
  display: inline-block;
  animation: wave 2s infinite;

  @keyframes wave {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-20deg);
    }
  }
`;

export const Name = styled.span`
  color: #6366f1;
  font-size: 5rem;
  display: block;
  margin-top: 0.5rem;
`;

export const Bio = styled.p`
  font-size: 1.3rem;
  color: #a1a1aa;
  max-width: 600px;
  line-height: 1.8;
  margin-top: 1.5rem;
`;
