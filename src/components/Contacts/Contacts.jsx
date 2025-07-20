import React from "react";
import './Contacts.css';

function Contacts() {
    const contactData = {
        "header": "Contact Us",
        "subheading": "We are excited to offer a seamless shopping experience through WhatsApp, where you can easily inquire about and order products.",
        "sections": [
            {
                "title": "Order the product",
                "description": "Get instant access to product details, availability, and pricing."
            },
            {
                "title": "Request further information",
                "description": "Discuss any inquiries related to the product, including pricing, shipping, and other business-related queries."
            }
        ],
        "support": {
            "phone": {
                "label": "Phone",
                "number": "+91 9502752375",
                "link": "tel:9502752375"
            },
            "email": {
                "label": "Email",
                "address": "Motwor.oil@gmail.com",
                "link": "mailto:Motwor.oil@gmail.com"
            }
        }
    };

    return (
        <section className="contact">
            <h3 className="contact-heading">{contactData.header}</h3>
            <p className="contact-subheading">{contactData.subheading}</p>
            <div className="firstcontainer">
            <div className="contact-info">
                {contactData.sections.map((section, index) => (
                    <div key={index}>
                        <p><strong>{section.title}</strong>: {section.description}</p>
                    </div>
                ))}

                <p className="contact-subheading">In case you encounter any issues or need additional assistance, you can always reach out to us via:</p>

                <ul className="contact-list">
                    <li><strong>{contactData.support.phone.label}:</strong> For immediate assistance or urgent queries, feel free to contact us directly at <a href={contactData.support.phone.link}>{contactData.support.phone.number}</a>.</li>
                    <li><strong>{contactData.support.email.label}:</strong> If you prefer written communication or need more detailed support, you can email us at <a href={contactData.support.email.link}>{contactData.support.email.address}</a>.</li>
                </ul>
            </div>
                <div className="image-section">
                    <img src="/assets/Motwor Logo Final.png" alt="Natural Oils" class="rounded-img" />
                </div>
            </div>
        </section>
    );
}

export default Contacts;
