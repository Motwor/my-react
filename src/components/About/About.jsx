import React from "react";
import './About.css';

const oilDescriptions = [
    {
        name: "Coconut Oil",
        description: "Cold-pressed from fresh coconuts, our coconut oil is rich in healthy fatty acids, antioxidants, and has natural antibacterial properties. Ideal for cooking, skincare, and haircare, it's a multi-purpose wellness staple with a pleasant aroma and taste. Coconut oil is also known for boosting metabolism, improving heart health by increasing HDL cholesterol levels, and reducing the appearance of fine lines when used as a moisturizer."
    },
    {
        name: "Groundnut (Peanut) Oil",
        description: "Extracted from premium peanuts, this oil has a mild nutty flavor and is high in heart-healthy monounsaturated fats. It’s perfect for deep-frying, traditional Indian cooking, and supports healthy skin thanks to its vitamin E content. Groundnut oil is also a good source of antioxidants like resveratrol, which helps fight free radicals, reduce inflammation, and support overall cardiovascular health. It is a great choice for those looking to reduce cholesterol levels."
    },
    {
        name: "Sesame Seed Oil",
        description: "Rich in nutrients and known for its strong aroma, sesame oil is used in cooking, massage, and Ayurvedic treatments. It contains anti-inflammatory and antioxidant properties, making it both a culinary and therapeutic essential. Sesame oil is packed with essential minerals like calcium, magnesium, and iron, supporting bone health and boosting the immune system. It’s also believed to help regulate blood sugar levels, making it ideal for those with diabetes."
    },
    {
        name: "Sunflower Oil",
        description: "Light and versatile, sunflower oil is high in vitamin E and low in saturated fats. It’s perfect for frying, baking, and salad dressings. Its neutral flavor makes it a favorite in many kitchens. Rich in omega-6 fatty acids, sunflower oil helps lower cholesterol and supports heart health. It also has moisturizing properties that help hydrate the skin and may reduce inflammation, making it a common ingredient in skincare products."
    }
];

function About() {
    return (
        <section className="about">
            <h3>About PureOils</h3>
            <b>
                At PureOils, we believe in the power of nature. All our oils are
                cold-pressed, ethically sourced, and free from additives. We’re
                committed to your wellness and sustainability.
            </b>

            <div className="oil-types">
                {oilDescriptions.map((oil, index) => (
                    <div className="oil-card" key={index}>
                        <h4>{oil.name}</h4>
                        <p>{oil.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;
