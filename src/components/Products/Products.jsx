import React from "react";
import Slider from "react-slick";
import './Products.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const oils = [
    {
        name:"Sesame Oil",
        description: "Rich in antioxidants, great for cooking and skincare.",
        img: "/assets/APA02491.JPG",
        inquiryText: "For more details on price and quantity, click here to inquire via WhatsApp.",
        purchaseLink: "https://wa.me/919502752375?text=I%20would%20like%20to%20buy%20Sesame%20Oil",
    },
    {
        name: "Coconut Oil",
        description: "Versatile and nourishing, perfect for hair and skin.",
        img: "/assets/APA02496.JPG",
        inquiryText: "For more details on price and quantity, click here to inquire via WhatsApp.",
        purchaseLink: "https://wa.me/919502752375?text=I%20would%20like%20to%20buy%20Coconut%20Oil",
    },
    {
        name: "Sunflower Oil",
        description: "Light, versatile sunflower oil rich in vitamin E for cooking, skincare..",
        img: "/assets/APA02501.JPG",
        inquiryText: "For more details on price and quantity, click here to inquire via WhatsApp.",
        purchaseLink: "https://wa.me/919502752375?text=I%20would%20like%20to%20buy%20Sunflower%20Oil",
    },
    {
        name: " Groundnut Oil",
        description: "Heart-healthy oil rich in vitamin E and antioxidants.",
        img: "/assets/APA02504.JPG",
        inquiryText: "For more details on price and quantity, click here to inquire via WhatsApp.",
        purchaseLink: "https://wa.me/919502752375?text=I%20would%20like%20to%20buy%20Groundnut%20Oil",
    },
    {
        name: "Get all Oils",
        description: "Natural antiseptic with various skin benefits.",
        img: "/assets/APA02508.JPG",
        inquiryText: "For more details on price and quantity, click here to inquire via WhatsApp.",
        purchaseLink: "https://wa.me/919502752375?text=I%20would%20like%20to%20know%20about%20the%20price%20and%20quantity%20of%20all%20oils"
    }
];

const whatsappNumber = '919502752375';

const isMobileDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iphone|ipad|ipod/i.test(userAgent);
};

function Products() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <div className="slick-arrow slick-next"></div>,
        prevArrow: <div className="slick-arrow slick-prev"></div>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="products">
            <h3>Our Oils</h3>
            <Slider {...settings}>
                {oils.map((oil) => (
                    <div key={oil.name} className="product-slide">
                        <div
                            className="product-card"
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={oil.img} alt={oil.name} />
                            <h4>{oil.name}</h4>
                            <p style={{ color:"#6B3F2A"}}>{oil.description}</p>
                            <p style={{ color: "#6B3F2A" }}>{oil.inquiryText}</p>
                            <button onClick={() => window.open(oil.purchaseLink, '_blank')}>Get Product</button>

                        </div>
                    </div>
                ))}
            </Slider>

        </section>
    );
}

export default Products;
