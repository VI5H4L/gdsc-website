import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PhotoCss from "./PhotoGallery.module.css";
// import image1 from "./images/image1.jpg";
// import image2 from "./images/image2.png";
// import image3 from "./images/image3.jpg";
// import image4 from "./images/image4.png";
// import image5 from "./images/image5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../ThemeContext";
import cube from "./images/cubeIllustation.png";

function Photo() {
  const { theme } = useContext(ThemeContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [allImage,setAllImage]=useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchImages = () => {
    // Your backend API endpoint for fetching the images
    const apiEndpoint = 'http://localhost:8000/gallery/';
    // Your API key for authentication
    // const apiKey = process.env.EVENT_URI;

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        // Set the fetched images to the state
        setAllImage(data.map(item => item.photo));
        setSelectedImage(data[0].photo);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
    };

  const previousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(allImage.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setSelectedImage(allImage[currentIndex]);
  };

  const nextImage = () => {
    if (currentIndex === allImage.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setSelectedImage(allImage[currentIndex]);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const container = document.getElementById("image-gallery-container");
    container.scrollTo({
      left: currentIndex * container.offsetWidth,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const handleClick = (index) => {
    const slider = allImage[index];
    setSelectedImage(slider);
  };

  return (
    <>
      <section id="photo" className={PhotoCss.main}>
        <div className={PhotoCss.cube}>
          <img className={PhotoCss.cubeImage} src={cube} />
        </div>
        <h1
          className={
            theme === "dark" ? PhotoCss.darkheading : PhotoCss.heading
          }>
          Photo Gallery
        </h1>
        <div className={PhotoCss.mainDiv}>
          <div className={PhotoCss.photoDiv}>
          {selectedImage && (
            <img src={selectedImage}  className={PhotoCss.photoDiv} />
          )}
          </div>
          <div className={PhotoCss.mainCarousal}>
            <button
              className={PhotoCss.carousalButton1}
              onClick={previousImage}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                size="2xl"
                style={{ color: "#fff", width: "50px", height: "50px" }}
              />
            </button>
            <div className={PhotoCss.scrollingDiv} id="image-gallery-container">
              <div className={PhotoCss.carousalDiv}>
                {allImage.map((img, index) => {
                  return (
                    <img
                      className={
                        selectedImage == allImage[index]
                          ? PhotoCss["clicked"]
                          : PhotoCss["notClicked"]
                      }
                      key={index}
                      src={img}
                      width={200}
                      height={100}
                      onClick={() => handleClick(index)}
                    />
                  );
                })}
              </div>
            </div>
            <button className={PhotoCss.carousalButton2} onClick={nextImage}>
              <FontAwesomeIcon
                icon={faAngleRight}
                size="2xl"
                style={{ color: "#fff", width: "50px", height: "50px" }}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Photo;
