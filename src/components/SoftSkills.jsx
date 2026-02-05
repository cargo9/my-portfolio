import {
  SoftSkillsSection,
  Title,
  TitleIcon,
  SoftSkillsGrid,
  SoftSkillCard,
  SoftSkillIcon,
  SoftSkillName,
  SoftSkillLevel,
  SoftSkillBar,
  SoftSkillPercent,
} from "./SoftSkills.styles";

const SoftSkills = ({ softskills = [] }) => {
  return (
    <SoftSkillsSection id="softskills">
      <Title>
        <TitleIcon>🚀</TitleIcon>
        Мої софт скіли</Title>

      <SoftSkillsGrid>
        {softskills.map((softskill) => (
          <SoftSkillCard key={softskill.id}>
            <SoftSkillIcon>{softskill.icon}</SoftSkillIcon>
            <SoftSkillName>{softskill.name}</SoftSkillName>
            <SoftSkillLevel>
              <SoftSkillBar $level={softskill.level} />
            </SoftSkillLevel>
            <SoftSkillPercent>{softskill.level}%</SoftSkillPercent>
          </SoftSkillCard>
          ))}
      </SoftSkillsGrid>
    </SoftSkillsSection>
  );
};

export default SoftSkills;
