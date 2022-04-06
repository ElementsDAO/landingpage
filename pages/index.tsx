import { useRouter } from "next/router";
import IntroContent from "../content/IntroContent.json";
import MiddleBlockContent from "../content/MiddleBlockContent.json";
import AboutContent from "../content/AboutContent.json";
import MissionContent from "../content/MissionContent.json";
import ProductContent from "../content/ProductContent.json";
import ContactContent from "../content/ContactContent.json";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";
import dynamic from 'next/dynamic'

export default function Home() {
const Contact = dynamic(() => import("../components/ContactForm"));
const MiddleBlock = dynamic(() => import("../components/MiddleBlock"));
const Container = dynamic(() => import("../common/Container"));
const ScrollToTop = dynamic(() => import("../common/ScrollToTop"));
const ContentBlock = dynamic(() => import("../components/ContentBlock"));

  const { locale, locales, defaultLocale, asPath } = useRouter();
  const newsContent = {
    en: {
      title: "Your News",
      content: [
        {
          title:
            "Otter.ai’s new assistant can automatically transcribe your Zoom meetings",
          synopsis:
            "A.I.-powered voice transcription service Otter.ai wants to make it even easier for its business users to record their meetings. The company is today introducing a new feature, Otter Assistant, whic...",
          imageUrl: "",
        },
        // ...
      ],
    },
    de: {
      title: "Vos nouvelles",
      content: [
        {
          title:
            "Le nouvel assistant d'Otter.ai peut transcrire automatiquement vos réunions Zoom",
          synopsis:
            "Le service de transcription vocale alimenté par A.I. Otter.ai veut rendre encore plus facile pour ses utilisateurs professionnels l'enregistrement de leurs réunions. La société présente aujourd'hui une nouvelle fonctionnalité, Otter Assistant, qui ...",
          imageUrl: "",
        },
        // ...
      ],
    },
  };
  const { title, content } = newsContent[locale];

  return (
    <>
      <Styles />
      <Header />
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="renewable-energy.jpg"
          id="intro"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />
        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          type="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="elements-energy.jpg"
          id="product"
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
      <Footer />
    </>
  );
}
