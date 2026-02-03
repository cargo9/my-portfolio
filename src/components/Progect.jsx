import {
  ProgectSection,
  ProgectTitle,
  ProgectIcon,
  ProgectGrid,
  ProgectCard,
  ProgectEmoji,
  ProgectName,
  ProgectDescription,
  ProgectTags,
  ProgectTag,
  ProgectUrl,
} from "./Progect.styles.js";

const Progect = ({ progectItems }) => {
  return (
    <ProgectSection id="setup">
      <ProgectTitle>
        <ProgectIcon>😍</ProgectIcon>
        Мої Проєкти
      </ProgectTitle>

      <ProgectGrid>
        {progectItems.map((item) => (
          <ProgectCard key={item.id}>
            <ProgectEmoji>{item.emoji}</ProgectEmoji>
            <ProgectUrl href={item.url} target="_blank"> {item.name} </ProgectUrl>
            <ProgectName></ProgectName>
            <ProgectDescription>{item.description}</ProgectDescription>
            <ProgectTags>
              {item.tags.map((tag, index) => (
                <ProgectTag key={index}>{tag}</ProgectTag>
              ))}
            </ProgectTags>
          </ProgectCard>
        ))}
      </ProgectGrid>
    </ProgectSection>
  );
};

export default Progect;
