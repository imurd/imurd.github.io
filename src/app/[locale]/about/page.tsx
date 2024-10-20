"use client";
import TheHeader from "@/app/components/TheHeader";
import SubFooter from "@/app/components/SubFooter";
import Link from "next/link";
import {useLocale} from "use-intl";
import HomeAboutSection from "@/app/components/HomeAboutSection";
import HomeFAQ from "@/app/components/HomeFAQ";


export default function AboutPage(){
    const locale = useLocale();
    const getLocalePath = (path:string) => {
        // Check if the path already includes the locale
        if (!path.startsWith(`/${locale}`)) {
            return `/${locale}${path}`;
        }
        return path;
    };
    return (
        <>
            <TheHeader/>
            <section className="breadcrumbs py-4" data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <ol>
                        <li><Link href={getLocalePath(`/`)}>Home</Link></li>
                        <li>about</li>
                    </ol>
                    <h2 className="title">about us</h2>
                    <p className="col-lg-10 col-12">
                        Although, final stages of the internal network gives a complete experience of
                        The Parameter of Speculative Environment
                    </p>
                </div>
            </section>
            <HomeAboutSection/>
            <HomeFAQ/>
            <SubFooter/>
        </>
    );
}