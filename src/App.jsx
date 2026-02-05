import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Progect from "./components/Progect.jsx";
import Skills from "./components/Skills.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import Setup from "./components/Setup.jsx";
import Footer from "./components/Footer.jsx";
import { GlobalStyle, AppContainer } from "./App.styles";

function App() {
  const userData = {
    name: "Ярослав",
    bio: "14 років • Junior Frontend Developer • Навчаюсь React та створюю крутий дизайн 🎨",
  };

  const skillsData = [
    { id: 1, name: "React", icon: "⚛️", level: 60 },
    { id: 2, name: "JavaScript", icon: "💛", level: 75 },
    { id: 3, name: "HTML & CSS", icon: "🎨", level: 90 },
    { id: 4, name: "UI/UX Design", icon: "✨", level: 55 },
    { id: 5, name: "Git & GitHub", icon: "🐙", level: 65 },
    { id: 6, name: "Figma", icon: "🎯", level: 70 },
    { id: 7, name: "Vite", icon: "⚡", level: 60 },
    { id: 8, name: "Styled Components", icon: "💅", level: 80 },
  ];

  const softSkillsData = [
    { id: 9, name: "Problem Solving", icon: "🧩 ", level: 85 },
    { id: 10, name: "Clean Code", icon: "📐", level: 80 },
    { id: 11, name: "Time Management", icon: "⏱️ ", level: 75 },
    { id: 12, name: "Teamwork / Code Review", icon: "👥 ", level: 70 },
  ];

  const setupData = [
    {
      id: 13,
      emoji: "🖱️",
      name: "Razer DeathAdder Essential",
      description: "Ергономічна проводна миша",
      tags: ["Wired", "Optical", "6400 DPI"],
    },
    {
      id: 14,
      emoji: "🖥️",
      name: "Samsung Odyssey G5",
      description: "27-дюймовий FHD монітор",
      tags: ["1920x1080", "IPS", "60Hz"],
    },
    {
      id: 15,
      emoji: "🎧",
      name: "HyperX Kingston Cloud II",
      description: "Навушники з активним шумозаглушенням",
      tags: ["ANC", "Wired", "30h"],
    },
    // {
    //   id: 4,
    //   emoji: "",
    //   name: "",
    //   description: "",
    //   tags: ["", "", ""],
    // },
  ];

    const progectData = [
    {
      id: 16,
      emoji: "🍕",
      name: "Fast-Food-Restaurant",
      url: "https://github.com/cargo9/Fast-Food-Restaurant.git",
      description: "Сімейний фастфуд ресторан з онлайн-меню та замовленнями",
      tags: ["Components", "Vite", "React"],
    },
    {
      id: 17,
      emoji: "🥗",
      name: "Food-Dash",
      url: "https://github.com/cargo9/Food-Dash.git",
      description: "Додаток меню східної їжі з анімаціями",
      tags: ["Single-page Application", "Vite", "JavaScript"],
    },
    {
      id: 18,
      emoji: "🎄",
      name: "Happy-New-Year",
      url: "https://github.com/cargo9/Happy-New-Year.git",
      description: "Святковий вебсайт з анімаціями та таймером до Нового Року",
      tags: ["Date", "Math.random", "JavaScript"],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Hero name={userData.name} bio={userData.bio} />
        <Progect progectItems={progectData} />
        <Skills skills={skillsData} />
        <SoftSkills skills={softSkillsData} />
        <Setup setupItems={setupData} />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
