import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  SocialLinks,
  SocialIcon,
  FooterBottom,
  Copyright,
} from "./Footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Навігація</FooterTitle>
          <FooterLink href="#skills">🚀 Навички</FooterLink>
          <FooterLink href="#setup">⚡ Сетап</FooterLink>
          <FooterLink href="#contact">📬 Контакт</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Контакти</FooterTitle>
          <FooterLink href="mailto:example@gmail.com">
            📧 suntsevyaroslav@gmail.com
          </FooterLink>
          <FooterLink href="tel:+380978759985">📱 +380 978 759 985</FooterLink>
          <FooterLink href="#">📍 Київ, Україна</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Соціальні мережі</FooterTitle>
          <SocialLinks>
            <SocialIcon
              href="https://github.com/cargo9"
              target="_blank"
              title="GitHub"
            >
              🐙
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com"
              target="_blank"
              title="LinkedIn"
            >
              💼
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com"
              target="_blank"
              title="Twitter"
            >
              🐦
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com"
              target="_blank"
              title="Instagram"
            >
              📷
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {currentYear} <span>MyPortfolio</span>. Всі права захищені.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
