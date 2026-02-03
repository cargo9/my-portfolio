import {
  SetupSection,
  SetupTitle,
  SetupIcon,
  SetupGrid,
  SetupCard,
  SetupEmoji,
  SetupName,
  SetupDescription,
  SetupTags,
  SetupTag,
} from "./Setup.styles";

const Setup = ({ setupItems }) => {
  return (
    <SetupSection id="setup">
      <SetupTitle>
        <SetupIcon>⚡</SetupIcon>
        Мій Сетап
      </SetupTitle>

      <SetupGrid>
        {setupItems.map((item) => (
          <SetupCard key={item.id}>
            <SetupEmoji>{item.emoji}</SetupEmoji>
            <SetupName>{item.name}</SetupName>
            <SetupDescription>{item.description}</SetupDescription>
            <SetupTags>
              {item.tags.map((tag, index) => (
                <SetupTag key={index}>{tag}</SetupTag>
              ))}
            </SetupTags>
          </SetupCard>
        ))}
      </SetupGrid>
    </SetupSection>
  );
};

export default Setup;
