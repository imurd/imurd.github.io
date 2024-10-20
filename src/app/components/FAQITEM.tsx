"use client";
import {useState} from "react";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function FAQItem(){
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Toggle function
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="col-12 my-4" data-aos="fade-up" data-aos-delay="250">
            <div className="box">
                <div className="d-flex w-100 justify-content-between">
                    {/* Use onClick in React with the toggleCollapse function */}
                    <a
                        className="w-100"
                        onClick={toggleCollapse}
                        role="button"
                        aria-expanded={isCollapsed}
                    >
                        <h4 className="d-flex justify-content-between w-100 heading-3 m-0 p-0">
                            Do you offer both on-site and remote IT support?
                            {/* Conditionally render the icon based on the collapse state */}
                            <FontAwesomeIcon
                                icon={isCollapsed ? faChevronUp : faChevronDown}
                                className="mx-4"
                            />
                        </h4>
                    </a>
                </div>
                {/* Use conditional rendering for the answer */}
                {isCollapsed && (
                    <p id="answer1" className="mt-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                        ullam earum itaque, quas labore illo eligendi iure asperiores, modi
                        veniam molestiae vero quasi. Ex, alias modi voluptates aspernatur
                        consequuntur facere?
                    </p>
                )}
            </div>
        </div>
    );
}