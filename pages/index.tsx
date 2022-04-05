import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { useRouter } from "next/router";
import NewsCard from "../components/NewsCard";

export default function Home() {
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
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        {content.map((newsItem, i) => (
          <NewsCard key={i} news={newsItem} />
        ))}
      </div>
    </Layout>
  );
}
