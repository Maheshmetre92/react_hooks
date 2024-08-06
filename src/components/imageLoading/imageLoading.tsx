import { useState } from 'react';
import './lazy.css';
import { imageData } from '../../constants/index';

function ImageComponent() {
  const [, setLoadedCount] = useState(0);
  const handleImageLoad = () => {
    setLoadedCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log(`Loaded images: ${newCount}`);
      return newCount;
    });
  };

  return (
    <div className="main">
      <div className="container">
        <div className="imgContainer">
          {imageData.map((i, index) => (
            <img
              alt=""
              key={index}
              src={i}
              className="imgTag"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
