import React from "react";
import AppCard from "../AppCard/AppCard";
import "./reviews.css";

const team = [
  {
    name: "Samantha",
    image:
      "https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/webpage_69/m694epyz/element_1197/rwdMode_1/50x50/client-1.webp",
    testimony:
      "The Weekly Planner Notebook from NoteMaster has transformed how I organize my schedule. The layout is intuitive, allowing me to plan my week effectively, and the compact size makes it easy to carry with me everywhere. I've never been more productive!",
  },
  {
    name: "Linda",
    image:
      "https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/webpage_69/m694epyz/element_1205/rwdMode_1/50x50/client-2.webp",
    testimony:
      "As a fountain pen enthusiast, I appreciate the excellent paper quality of NoteMaster notebooks. They handle ink beautifully without any bleeding or feathering Plus,the variety of designs allows me to choose the perfect notebook to match my style.",
  },
  {
    name: "Sarah",
    image:
      "https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/webpage_69/m694epyz/element_1213/rwdMode_1/50x50/client-3.webp",
    testimony:
      "I recently purchased the Tech Savvy Notebook from NoteMaster, and I'm blown away by its innovative features. The QR code integration and indexed pages make it incredibly easy to organize my notes, and the writable NFC tags are a game-changer for digital connectivity.",
  },
  {
    name: "Wallis",
    image:
      "https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/webpage_69/m694epyz/element_1227/rwdMode_1/50x50/client-4.webp",
    testimony:
      "NoteMaster notebooks are my go-to choice for bullet journaling. The paper is luxuriously smooth, perfect for jotting down thoughts or sketching ideas. If you're in search of the perfect notebook, look no further than NoteMaster you won't be disappointed! Highly recommended!",
  },
];

const Review = () => {
  return (
    <div className="review-section">
      <div className="left-content">
        <h3>Clients about our products</h3>
      </div>
      <div className="right-content">
        <div className="testimonies">
          {team.map((person, index) => (
            <AppCard
              key={index}
              title={person.name}
              image={person.image}
              rating={5}
              className="person-card"
            >
              <p className="person-desc">{person.testimony}</p>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
