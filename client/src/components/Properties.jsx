
import React, { useState } from "react";
import filterIcon from "../assets/filter.png";
import { IoIosArrowDown } from "react-icons/io";
import { data } from "../Db";
import bathIcon from "../assets/bath.png";
import heartIcon from "../assets/heart.png";
import bedIcon from "../assets/bed.png";
import arrowIcon from "../assets/cross-arrow.png";
import shareIcon from "../assets/share.png";
import cameraIcon from "../assets/camera.png";
import linkIcon from "../assets/link.png";
import imageIcon from "../assets/image.png";
import { IoLocationSharp } from "react-icons/io5";
import Pagination from "./Pagination";
import PropertyCarousel from "./PropertyCarousel";
import "../style/Properties.css"

const Properties = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
    <main>
        <div className="container">
        <section className="d-flex justify-content-between mt-5 nex-box">
            <div className="d-flex  align-items-center gap-3 border">
              <div className="d-flex gap-2 align-items-center">
                <img src={filterIcon} alt="filter-icon" className="img-fluid icon m" />
                <h3 className="filter">More Filter</h3>
              </div>
              <div>
                <h3 className="filter">{currentItems.length} of {data.length} results</h3>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-2">
              <h3 className="filter">Sort by:</h3>
              <div className="d-flex align-items-center gap-2">
                <h3 className="filter">Default</h3>
                <IoIosArrowDown className="mb-2"/>
              </div>
            </div>
          </section>
          <section className="row">
          {currentItems.map((datum) => {
            const {
                id,
                image,
                title,
                location,
                bedroom,
                bathroom,
                price,
                feature,
                offer,
              } = datum;
              return(
                <div key={id} className="p-3 col-12  col-lg-4">
                   <div className="d-flex flex-column h-100">
                    <div className="position-relative w-100">
                      <img src={image} alt="" className="img-fluid houseImg" />
                      <div className="position-absolute top-0 start-0 mt-3  px-3 d-flex justify-content-between w-100">
                        <p className="p-2 feature text-white">{feature}</p>
                        <p className="p-2 sale text-white">{offer}</p>
                      </div>
                      <div className="position-absolute d-flex top-50 ms-3 end-0 p-3 gap-3 view">
                        <img src={linkIcon} alt="" className="view-box p-2" />
                        <img src={cameraIcon} alt="" className="view-box p-2" />
                        <img src={imageIcon} alt="" className="view-box p-2" />
                      </div>
                    </div>
                    <div className="p-3 border rounded-bottom flex-grow-1 d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="title">{title}</h3>
                        <div className="d-flex gap-3">
                          <IoLocationSharp className="location-icon" />
                          <h6 className="location">{location}</h6>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex gap-2">
                            <img src={bedIcon} alt="" className="icons" />
                            <h6 className="bedroom">{bedroom}</h6>
                          </div>
                          <div className="d-flex gap-2">
                            <img src={bathIcon} alt="" className="icons" />
                            <h6 className="bathroom">{bathroom}</h6>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="price">&#8358;{price}</h6>
                          <div className="d-flex gap-3">
                            <img src={arrowIcon} alt="icon" className="icon" />
                            <img src={shareIcon} alt="icon" className="icon" />
                            <img src={heartIcon} alt="icon" className="icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  

                </div>
              )

          })}


          </section>
          <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          </div>
          <h2 className="my-5 advert-head text-center">Discover Our Popular Properties</h2>
          <div className="mb-4">
          <PropertyCarousel/>
          </div>
        </div>
    </main>
    </>
  )
}

export default Properties