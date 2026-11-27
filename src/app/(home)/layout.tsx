import { PortfolioDocument, portfolioMetadata } from "@/components/layout/PortfolioDocument";

export { viewport } from "@/components/layout/PortfolioDocument";
export const metadata = portfolioMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <PortfolioDocument locale="en">{children}</PortfolioDocument>;
}
