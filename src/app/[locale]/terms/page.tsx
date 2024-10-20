"use client";

import TheHeader from "@/app/components/TheHeader";
import SubFooter from "@/app/components/SubFooter";
import {useLocale} from "use-intl";
import Link from "next/link";


export default function PrivacyPage() {
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
                        <li>terms of use</li>
                    </ol>
                    <h2 className="title">terms of use</h2>
                    <p className="col-lg-10 col-12">
                        Although, final stages of the internal network gives a complete experience of
                        The Parameter of Speculative Environment
                    </p>
                </div>
            </section>

            <section className="privacy mt-4 pt-4 mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">
                <div className="container">
                    <h1 className="title my-4">Terms of Use</h1>
                    <p className="my-2">Last Updated: <span className="unique-text">26/01/2024</span></p>
                    <p>Welcome to techida!</p>
                    <p>By accessing and using our website and services, you agree to comply with and be bound by the
                        following
                        terms and conditions. If you disagree with any part of these terms, please do not use our
                        website or
                        services.
                    </p>
                    <br/>
                        <h2 className="title-2">1. Acceptance of Terms</h2>
                        <p>By using [Your Company Name]'s website and services, you acknowledge that you have read,
                            understood, and
                            agree to be bound by these Terms of Use. If you do not agree with any part of these terms,
                            you may not
                            use
                            our website or services.
                        </p>
                        <br/>
                            <h2 className="title-2">2. Use of Services</h2>
                            <p>You agree to use [Your Company Name]'s services only for lawful purposes and in
                                accordance with these
                                Terms
                                of Use. You are responsible for ensuring that your use of our services does not violate
                                any applicable
                                laws
                                or regulations.
                            </p>
                            <br/>
                                <h2 className="title-2">3. User Accounts</h2>
                                <p>To access certain features of our services, you may be required to create a user
                                    account. You are
                                    responsible for maintaining the confidentiality of your account information,
                                    including your username and
                                    password. You agree to notify us immediately of any unauthorized use of your
                                    account.
                                </p>
                                <br/>
                                    <h2 className="title-2">4. Intellectual Property</h2>
                                    <p>All content and materials on our website, including but not limited to text,
                                        graphics, logos, images, and
                                        software, are the property of [Your Company Name] and are protected by
                                        intellectual property laws. You
                                        may
                                        not modify, reproduce, distribute, or display any part of our website or
                                        services without our prior
                                        written
                                        consent.
                                    </p>
                                    <br/>
                                        <h2 className="title-2">5. Disclaimer of Warranties</h2>
                                        <p>
                                            Our website and services are provided on an "as-is" and "as-available"
                                            basis. We make no warranties,
                                            expressed or implied, regarding the accuracy, reliability, or availability
                                            of our website or services.
                                            We
                                            reserve the right to modify, suspend, or discontinue any part of our
                                            services without notice.
                                        </p>
                                        <br/>
                                            <h2 className="title-2">6. Limitation of Liability</h2>
                                            <p>
                                                In no event shall [Your Company Name] be liable for any indirect,
                                                incidental, special, consequential, or
                                                punitive damages, or any loss of profits or revenues, whether incurred
                                                directly or indirectly, arising
                                                from
                                                your use of our website or services.
                                            </p>
                                            <br/>
                                                <h2 className="title-2">7. Governing Law</h2>
                                                <p>
                                                    These Terms of Use shall be governed by and construed in accordance
                                                    with the laws of [Your
                                                    Jurisdiction].
                                                    Any legal action or proceeding arising out of or relating to these
                                                    terms shall be brought exclusively in
                                                    the
                                                    courts located within [Your Jurisdiction], and you consent to the
                                                    jurisdiction of such courts.
                                                </p>
                                                <br/>
                                                    <h2 className="title-2">8. Changes to Terms</h2>
                                                    <p>
                                                        [Your Company Name] reserves the right to update or modify these
                                                        Terms of Use at any time without prior
                                                        notice. Your continued use of our website and services after any
                                                        changes constitutes acceptance of those
                                                        changes.
                                                    </p>
                                                    <br/>
                                                        <br/>
                                                            <h2 className="title-2">Contact Us</h2>
                                                            <p>
                                                                If you have any questions or concerns about our Terms of
                                                                Use, please contact us at [your contact email]
                                                            </p>
                                                            <br/>
                                                                <p>
                                                                    Thank you for choosing [Your Company Name]. We
                                                                    appreciate your cooperation and adherence to these
                                                                    terms.
                                                                </p>
                </div>
            </section>

            <SubFooter/>
        </>
    );
}