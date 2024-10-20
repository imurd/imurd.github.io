"use client";
import Link from "next/link";
import {useLocale} from "use-intl";

export default function Footer(){
    const locale = useLocale();

    const getLocalePath = (path:string) => {
        // Check if the path already includes the locale
        if (!path.startsWith(`/${locale}`)) {
            return `/${locale}${path}`;
        }
        return path;
    };
    return (
        <div className="copyrights ">
            <div className="container">
                <div className="row">
                    <div
                        className="col-12 col-md-6 d-flex justify-content-lg-start justify-content-md-start justify-content-center">
                        <p className="creadits">
                            &copy; 2024
                            Created by: <Link href="#">Moonleaf</Link>
                        </p>
                    </div>
                    <div
                        className="col-12 col-md-6 d-flex justify-content-lg-end justify-content-md-end justify-content-center pb-md-0 pb-md-0 pb-lg-0 pb-3">
                        <div>
                            <Link href={getLocalePath(`/terms`)}>Terms of Use </Link>
                            | <Link href={getLocalePath(`/privacy`)}>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}