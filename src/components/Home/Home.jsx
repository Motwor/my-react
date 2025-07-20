import React from "react";
import './Home.css';

// JSON-style data for About section
const aboutPoints = [
    {
        title: "Locally Sourced Seeds",
        description: "We partner directly with nearby farmers to source high-quality oil seeds. This ensures freshness and supports local agriculture."
    },
    {
        title: "Traditional Cold Press Method",
        description: "Seeds are sent to trusted mills for natural cold-press extraction, retaining nutrients and natural aroma."
    },
    {
        title: "100% Natural & Pure",
        description: "Our oils are completely free from chemicals, preservatives, or artificial additives—just pure, unrefined oil."
    },
    {
        title: "No Stabilizers or Additives",
        description: "We don’t use any synthetic substances to alter shelf life or texture—our oils are as natural as they come."
    },
    {
        title: "Committed to Quality and Health",
        description: "Every step, from sourcing to bottling, is done with care to ensure your health and satisfaction."
    }
];

function Home() {
    return (
        <section className="home">
            <h2>Natural Oils for a Healthier Life</h2>
            <p>Organic. Cold-Pressed. Sustainably Sourced.</p>
            <a href="#products" className="explore-btn">Explore Products</a>
            <div className="firstcontainer">
            <div className="about-section">
                <h3>Why Our Oils Are Different</h3>
                <ul className="about-points">
                    {aboutPoints.map((point, index) => (
                        <li key={index}>
                            <strong>{point.title}:</strong> {point.description}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="image-section">
                    <img src="/assets/APA02508.JPG" alt="Natural Oils" class="rounded-img1" />
            </div>
            </div>
        </section>
    );
}

export default Home;
