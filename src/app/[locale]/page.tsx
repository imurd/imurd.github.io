import { Html, Head, Main, NextScript } from "next/document";
import {Fragment} from "react";

import Testimonials from "@/app/components/Testimonials";
import TheHeader from "@/app/components/TheHeader";
import HeroComponent from "@/app/components/HeroComponent";
import HomeServices from "@/app/components/HomeServices";
import HomeAboutSection from "@/app/components/HomeAboutSection";
import HomeWhyUs from "@/app/components/HomeWhyUs";
import HomePortfolio from "@/app/components/HomePortfolio";
import HomeBlogSection from "@/app/components/HomeBlogSection";
// import HomeFAQ from "@/app/components/HomeFAQ";
// import ContactForm from "@/app/components/ContactForm";
import SubFooter from "@/app/components/SubFooter";




export default function Home() {
  return (
      <Fragment>
        {/*<Header/>*/}
        <TheHeader/>
        <HeroComponent/>
        <HomeServices/>
        <HomeAboutSection/>
         <HomeWhyUs/>
          <HomePortfolio/>
          <Testimonials/>
          <HomeBlogSection/>
          {/*<HomeFAQ/>*/}
          {/*<ContactForm/>*/}
          <SubFooter/>
      </Fragment>
  );
}
