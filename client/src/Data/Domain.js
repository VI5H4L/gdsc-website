import { useState } from "react";
import image1 from "../components/PhotoGallery/images/image1.jpg";
import image2 from "../components/PhotoGallery/images/image2.png";
import image3 from "../components/PhotoGallery/images/image3.jpg";
import image4 from "../components/PhotoGallery/images/image4.png";
import image5 from "../components/PhotoGallery/images/image5.png";
import { DevelopmentMembers, CpMembers } from "./Teams";
const DomainData = [
  {
    id: 1,
    heading: "Development",
    src: image1,
  },
  {
    id: 2,
    heading: "Creative",
    src: image2,
  },
  {
    id: 3,
    heading: "AI/ML",
    src: image3,
  },
  {
    id: 4,
    heading: "GameDev",
    src: image4,
  },
  {
    id: 5,
    heading: "CP",
    src: image5,
  },
  {
    id: 6,
    heading: "Management",
    src: image5,
  },
];

export default DomainData;
