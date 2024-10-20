"use client";
import TheHeader from "@/app/components/TheHeader";
import SubFooter from "@/app/components/SubFooter";
import {useLocale} from "use-intl";
import Link from "next/link";
import HomePortfolio from "@/app/components/HomePortfolio";


export default function PortfolioPage(){
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
            <section className="breadcrumbs py-4" data-aos="fade-up" data-aos-delay="100">
                <div className="container">
                    <ol>
                        <li>
                            <Link href={getLocalePath(`/`)}>Home</Link>
                        </li>
                        <li>services</li>
                    </ol>
                    <h2 className="title">our services</h2>
                    <p className="col-lg-10 col-12">
                        Although, final stages of the internal network gives a complete experience of
                        The Parameter of Speculative Environment
                    </p>
                </div>
            </section>
            <HomePortfolio/>
            <SubFooter/>
        </>
    );
}