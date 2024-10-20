"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialsSlide from "@/app/components/TestimonialsSlide";

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            title: "CEO at Company",
            text: "This is a fantastic service that exceeded our expectations!"
        },
        {
            name: "Jane Smith",
            title: "CTO at Another Company",
            text: "Highly recommended! The quality is top-notch and the support is outstanding."
        },
        {
            name: "Alice Johnson",
            title: "Marketing Director",
            text: "An excellent experience from start to finish. Will definitely use again."
        },
        {
            name: "John Doe",
            title: "CEO at Company",
            text: "This is a fantastic service that exceeded our expectations!"
        },
        {
            name: "Jane Smith",
            title: "CTO at Another Company",
            text: "Highly recommended! The quality is top-notch and the support is outstanding."
        },
        {
            name: "Alice Johnson",
            title: "Marketing Director",
            text: "An excellent experience from start to finish. Will definitely use again."
        },
    ];

    return (
        <section className="container testimonials py-12">
            <div className="heading text-center">
                <span className="pretitle block text-gray-500 uppercase" data-aos="fade-up">
                    Testimonials
                </span>
                <h2 className="title text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
                    Customer Testimonials
                </h2>
                <p className="text-lg mx-auto max-w-lg" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact, the unification of the coherent software provides strict control over the accomplishment of intended estimation.
                </p>
            </div>
            <div className="mt-8">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Mobile view
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3, // Tablet view
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3, // Desktop view
                            spaceBetween: 50,
                        },
                    }}
                >

                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide className="w-full" key={index}>
                            <TestimonialsSlide/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}