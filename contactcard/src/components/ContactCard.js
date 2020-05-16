import React from "react";

function ContactCard(property) {
    return (<div className="contact-card">
        <img width="250" height="250" src={property.contact.imageUrl}/>
        <h3>{property.contact.name}</h3>
        <p>Phone: {property.contact.phone}</p>
        <p>Email: {property.contact.email}</p>
    </div>);
}

export default ContactCard;