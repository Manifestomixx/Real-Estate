import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { IoLocationSharp } from 'react-icons/io5';
import { adverts } from '../Db';
import '../style/Properties.css';

const PropertyCarousel = () => {
  const getChunkSize = () => {
    if (window.innerWidth < 600) return 2;
    if (window.innerWidth < 900) return 3;
    return 4;
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize());

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(getChunkSize());
    };

    window.addEventListener('resize', handleResize);


    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const advertGroup = chunkArray(adverts, chunkSize);

  return (
    <Carousel className='container'>
      {advertGroup.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center" role='button'>
            {group.map((advert) => {
              const {
                id,
                image,
                title,
                location,
                bedroom,
                bathroom,
                price,
                feet,
              } = advert;
              return (
                <div key={id} className="carousel-item-wrapper p-2">
                  <div className="position-relative d-flex flex-column align-items-center">
                    <img
                      className="d-block advertImg rounded"
                      src={image}
                      alt={`Slide ${index}`}
                    />
                    <div className="position-absolute bottom-0 p-2 text-start w-100 advert-bg">
                      <h5 className="advertTitle mb-2 text-white">{title}</h5>
                      <h5 className='text-white advert-price'>{price}</h5>
                      <div className="d-flex gap-2">
                        <h6>{bedroom}</h6>
                        <h6>{bathroom}</h6>
                        <h6>{feet}</h6>
                      </div>
                      <p className="advertLocation text-white">
                        <IoLocationSharp />
                        {location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PropertyCarousel;
