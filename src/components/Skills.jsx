import {
  SkillsSection,
  Title,
  TitleIcon,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  SkillLevel,
  SkillBar,
  SkillPercent,
} from "./Skills.styles";

const Skills = ({ skills }) => {
  return (
    <SkillsSection id="skills">
      <Title>
        <TitleIcon>🚀</TitleIcon>
        Мої Навички
      </Title>

      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.id}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>
              <SkillBar $level={skill.level} />
            </SkillLevel>
            <SkillPercent>{skill.level}%</SkillPercent>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
