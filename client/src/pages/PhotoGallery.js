import React, {useState,useEffect}from 'react'
import PhotoCss from './PhotoGallery.module.css'
import photo from '../images/photoGallery.png'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.png'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight,faTwitter,faInstagram } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';




function Photo() {



  const [selectedImage,setSelectedImage]=useState(image1);
  const [allImage,setAllImage]=useState([image1,image2,image3,image4,image5,image5,image5]);

  const [currentIndex, setCurrentIndex] = useState(0);

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
    const container = document.getElementById('image-gallery-container');
    container.scrollTo({
      left: currentIndex * container.offsetWidth,
      behavior: 'smooth'
    });
  }, [currentIndex]);

  const handleClick=(index)=>{
    const slider=allImage[index];
    setSelectedImage(slider);
  }

    return ( 
        <>
        <section id='photo' className={PhotoCss.main}>
            <h1 className={PhotoCss.heading}>Photo Gallery</h1>
            <div className={PhotoCss.mainDiv}>
            <div className={PhotoCss.photoDiv} >
              <img src={selectedImage} className={PhotoCss.photoDiv} />
              </div>
              <div className={PhotoCss.mainCarousal}>
              <button className={PhotoCss.carousalButton1} onClick={previousImage}><FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#fff",width:'50px', height:'50px'}} /></button>
              <div className={PhotoCss.scrollingDiv} id='image-gallery-container'>
          <div className={PhotoCss.carousalDiv} >
            {
              allImage.map((img,index)=>{
                return <img className={selectedImage==allImage[index]? PhotoCss["clicked"]: PhotoCss["notClicked"]} key={index} src={img} width={200} height={100} onClick={()=>handleClick(index)}/>
                
                
              })
            }
             </div>
             </div>
             <button className={PhotoCss.carousalButton2} onClick={nextImage}><FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#fff",width:'50px', height:'50px'}} /></button>
             </div>
             </div> 
        </section>
        </>
     );
}

export default Photo;