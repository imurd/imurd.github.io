"use client";
import {useState} from "react";
import HomePortfolioItem from "@/app/components/HomePortfolioItem";

type Project = {
    id: number,
    category: string,
    title: string,
    description: string
};

export default function HomePortfolio(){
    const tabs = ['All', 'Web Development', 'Graphic Design', 'Photography',  ];

    const projects = [
        { id: 1, category: 'Web Development', title: 'Portfolio Website', description: 'A personal portfolio website.' },
        { id: 2, category: 'Graphic Design', title: 'Brand Logo', description: 'A logo design for a startup.' },
        { id: 3, category: 'Photography', title: 'Landscape Photography', description: 'Photos from a recent trip.' },
        // Add more projects here
    ];
    const [selectedTab, setSelectedTab] = useState('All');

    const filteredProjects = selectedTab === 'All'
        ? projects
        : projects.filter(project => project.category === selectedTab);


    return (
        <section className="container portfolio py-5" id="portfolio">
            <div className="heading">
      <span className="pretitle" data-aos="fade-up">
        portfolio
      </span>
                <h2 className="title col-12" data-aos="fade-up" data-aos-delay="100">
                    our portfolio
                </h2>
            </div>
        <div className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`flex-1 min-w-[120px] py-2 px-4 rounded-md 
                    ${selectedTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} 
                    hover:bg-blue-400 transition 
                    sm:flex-none sm:w-auto`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="row portfolio-row gy-4 gx-4">
                {filteredProjects.map(project => (
                    <HomePortfolioItem key={project.id}
                                       project={project}
                    />
                ))}
            </div>
        </div>
        </section>
    );
}