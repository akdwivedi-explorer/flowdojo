import Company from "@/components/company/Company";
import Contact from "@/components/contact/Contact";
import Customer from "@/components/customer/Customer";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Company />
      <Features />
      <Pricing />
      <Customer />
      <Contact />
      <Footer />
    </div>
  );
}