import React from "react";
import "./Note.css";

const Note = () => {
  return (
    <div className="note-section">
      <div className="left-content">
        <h2>Why our notebooks?</h2>
      </div>
      <div className="right-content">
        {[
          {
            title: null,
            text: "Thick, acid-free paper ensures a smooth writing experience without fear of ink bleed-through, making these notebooks ideal for a variety of writing instruments.",
          },
          {
            title: "Durable cover",
            text: "The durable cover protects your notes from wear and tear, ensuring that your thoughts and ideas stay safe inside.",
          },
          {
            title: "Portable size",
            text: "Compact and lightweight, these notebooks are perfect for on-the-go use, fitting easily into bags, backpacks, or pockets.",
          },
          {
            title: "Versatile design",
            text: "With a variety of designs to choose from, including classic patterns and modern motifs, there's a notebook to suit every style and preference.",
          },
          {
            title: "Sewn binding",
            text: "The sewn binding provides durability and flexibility, allowing the notebook to lay flat for easy writing and sketching.",
          },
        ].map((ft, i) => (
          <div className="right-text" key={i}>
            {ft.title && <h4>{ft.title}</h4>}
            <p>{ft.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
