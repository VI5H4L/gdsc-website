
import React, { useState, useEffect } from "react";
import PagesHeading from "../../components/PagesHeading/PagesHeadingDiv";
import EventImage from "./images/eventsImage.png";
import EventCard from "../../components/Card/Card";


function EventsPage(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://gdscbackend.vercel.app/events/all");
      const data = await response.json();
      setAllData(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleFilterChange = async (selectedDomain, selectedTenure) => {
    try {
    let url = "https://gdscbackend.vercel.app/events/filter";

      if (selectedDomain && selectedTenure) {
        // console.log('working');
        url += `?domains=${selectedDomain}&&tenure=${selectedTenure}`;
      } else if (selectedDomain) {
        url += `?domains=${selectedDomain}`;
      } else if (selectedTenure) {
        url += `?tenure=${selectedTenure}`;
      }
    // console.log(selectedDomain);
    // console.log(selectedTenure);
    const response = await fetch(url);
    const data = await response.json();
    setFilteredData(data);
    // console.log(data);
    } catch (error) {
      console.error("Error filtering events:", error);
    }
  };

  return (
    <>
      <PagesHeading
        heading={props.heading}
        image1={props.image1}
        image2={props.image2}
        FilterHeading={props.FilterHeading}
        variant={props.variant}
        onFilterChange={handleFilterChange}
        fetchData={fetchData}
      />
      <EventCard
        data={filteredData.length > 0 ? filteredData : allData}
        image2={EventImage}
        variant={props.variant}
      />
    </>
  );
}

export default EventsPage;

