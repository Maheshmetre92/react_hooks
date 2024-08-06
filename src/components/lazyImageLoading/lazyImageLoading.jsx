import { useState } from 'react';
import './lazy.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imageData } from '../../constants/index';

function LazyLoadingComponent() {
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
            <LazyLoadImage
              alt=""
              key={index}
              src={i}
              className="imgTag"
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: '1s' },
              }}
              threshold={1000}
              onLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LazyLoadingComponent;
