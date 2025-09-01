use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider
      theme={{
        styleVariant: "funAndTrendy",
        colorTemplate: 1,
        textAnimation: "slide",
      }}
    >
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="MoonMeme Coin Logo"
        buttonText="Explore Moon"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to MoonMeme Coin"
          subtitle="Join the fun and be part of the meme revolution!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is MoonMeme Coin?"
          descriptions={["A playful meme coin for everyone.", "Join our community and start trading today!"]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is a meme coin?", content: "A type of cryptocurrency that is often based on humorous content." },
            { title: "How to buy MoonMeme Coin?", content: "You can purchase it on popular crypto exchanges." },
            { title: "Is it safe to invest?", content: "As with all investments, do your research and invest wisely." }
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy MoonMeme Coin"
          steps={[
            { title: "Step 1: Choose an Exchange", description: "Select an exchange that supports MoonMeme Coin.", position: "left", image: "/images/placeholder1.avif", isCenter: false },
            { title: "Step 2: Create an Account", description: "Sign up and complete KYC verification.", position: "center", image: "/images/placeholder2.avif", isCenter: true },
            { title: "Step 3: Make Your Purchase", description: "Buy MoonMeme Coin using your preferred payment method.", position: "right", image: "/images/placeholder3.avif", isCenter: false }
          ]}
        />
      </div>

      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline
          items={[
            { year: "2024", title: "Launch", description: "The official launch of MoonMeme Coin!" },
            { year: "2025", title: "Expansion", description: "Building partnerships and community engagement." },
            { year: "2026", title: "Innovation", description: "Introducing new features and updates!" }
          ]} 
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="MoonMeme Tokenomics"
          description="A breakdown of our token distribution and usage."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000" },
            { id: 2, title: "Liquidity", description: "30% allocated to liquidity." },
            { id: 3, title: "Marketing", description: "20% for marketing and promotions." }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="MoonMeme Coin Logo"
          logoText="MoonMeme Coin"
          className="footer-class"
          columns={[
            { title: "Quick Links", items: [{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Contact Us", onClick: () => {} }, { label: "FAQs", onClick: () => {} }] },
            { title: "More Info", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MoonMeme Coin"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}