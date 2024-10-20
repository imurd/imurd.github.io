import Link from "next/link";

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
}
interface HomePortfolioItemProps {
    project: Project;
}

export default function HomePortfolioItem({project}: HomePortfolioItemProps){
    return (
        <div className="col-md-6 col-lg-4 mx-auto mobile ">
            <div className="portfolio-item">
                <img src="../../../static/images/portfolio/1.jpg" className="gallery-item" alt="portfolio-img"/>
                    <div className="img-overlay">
                        <div className="content">
                            <h3>{project.title}</h3>
                            <h6>{project.category}</h6>
                            <div className="d-flex tags my-2">
                                <span>#react</span>
                                <span>#HTML</span>
                                <span>#next_js</span>
                                <span>#node</span>
                            </div>
                            <div className="link">
                                <Link className="unique-text" href="portfolio-single.html">view
                                    project</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}