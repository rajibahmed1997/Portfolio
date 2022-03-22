import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://www.facebook.com/rajibahmed1997/">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/saidul-islam-rajib-a12025233/">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio-details-name">
                    <span className="primary-text">
                    {" "}
                    Hello, Im <span className="highlighted-text"> Rajib </span>
                    </span>
                </div>

                <div className="profile-details-role">
                    <span className="primary-text">
                    {" "}
                    <h1>
                        {""}
                        <Typical
                        
                        steps={[
                            
                            "Software Developer ",
                            1000,
                            "Problem Solving",
                            1000,
                            "Pseduo Data Scientist",
                            1000,
                            
                        ]}
                        

                        wrapper="p"
                        />
                    </h1>
                    <span className="profile-role-tagline">
                        Love to learn new things everyday....
                    </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn">
                    {""}
                    Hire Me {""}
                    </button>
                    <a href="resume.pdf" download="resume.pdf">
                    <button
                        className="btn highlighted-btn">
                        {" "}
                        Download Resume
                    </button>
                    </a>
                </div>
            </div>

            <div className="profile-picture">
                <div className="profile-picture-background">
                
                </div>
            </div>
        </div>
    </div>
  )
}
