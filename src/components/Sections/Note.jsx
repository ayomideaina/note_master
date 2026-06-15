import React from 'react';
import './Note.css';

const Note = () => {
  return (
    <div className="note-section">
        <div className="left-content">
            <h2>Why our notebooks?</h2> 
        </div>
        <div className='right-content'>
            <div className="right-text">
                <p>Thick, acid-free paper ensures a smooth writing experience without fear of ink bleed-through, 
                    making these notebooks ideal for a variety of writing instruments.
                </p>

            </div>
            <div className="right-text">
                <h4>Durable cover</h4>
                <p>The durable cover protects your notes from wear and tear, ensuring that your thoughts and 
                    ideas stay safe inside.
                </p>
            </div>
            <div className="right-text">
                <h4>Portable size</h4>
                <p>Compact and lightweight, these notebooks are perfect for on-the-go use, fitting easily into bags, 
                    backpacks, or pockets.
                </p>
            </div>
            <div className="right-text">
                <h4>Versatile design</h4>
                <p>With a variety of designs to choose from, including classic patterns and modern motifs, there's a 
                    notebook to suit every style and preference.
                </p>
            </div>
            <div className="right-text">
                <h4>Sewn binding</h4>
                <p>The sewn binding provides durability and flexibility, allowing the notebook to lay flat for easy 
                    writing and sketching.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Note;
