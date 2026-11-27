import { notFound } from "next/navigation";
import { PortfolioDocument, portfolioMetadata } from "@/components/layout/PortfolioDocument";

export { viewport } from "@/components/layout/PortfolioDocument";
export const dynamicParams = false;
export const generateStaticParams = () => [{ lang: "en" }, { lang: "es" }];

type Params = Promise<{ lang: string }>;

async function localeFrom(params: Params) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es") notFound();
  return lang;
}

export async function generateMetadata({ params }: { params: Params }) {
  return portfolioMetadata(await localeFrom(params));
}

export default async function RootLayout({ params, children }: { params: Params; children: React.ReactNode }) {
  return <PortfolioDocument locale={await localeFrom(params)}>{children}</PortfolioDocument>;
}
