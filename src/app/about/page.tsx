import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pesaku",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Pesaku is a digital transaction platform that provides various selected digital products at the best prices. Presented in a modern Android mobile application that is easy to use anytime and anywhere.

Pesaku uses the electronic balance system contained in the application, by making a deposit to top up the balance. Has customer service that is ready to serve 24/7 and can be contacted directly via cell phone call."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
