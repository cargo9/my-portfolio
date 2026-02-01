import { HeroSection, Greeting, Emoji, Name, Bio } from "./Hero.styles";

const Hero = ({ name, bio }) => {
  return (
    <HeroSection>
      <Greeting>
        <Emoji>👋</Emoji> Привіт, я<Name>{name}</Name>
      </Greeting>

      <Bio>{bio}</Bio>
    </HeroSection>
  );
};

export default Hero;
