import React, { useState, useEffect } from "react";
import PagesHeading from "../../components/PagesHeading/PagesHeadingDiv";
import About from "../../components/Leads/Leads";
import DomainSection from "../../components/DomainSection/DomainSection";
import DomainData from "../../Data/Domain";

function TeamsPage(props) {
  const [gdscLeadData, setGdscLeadData] = useState([]);
  const [selectTenure, setSelectTenure] = useState("");
  const [selectDomain, setSelectDomain] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://gdscbackend.vercel.app/ourteam/gdsclead");
      const data = await response.json();
      setAllData(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleTenureChange = async (selectedDomain, selectedTenure) => {
    try {
      let url = `https://gdscbackend.vercel.app/ourteam/filter?tenure=${selectedTenure}`;
      const response = await fetch(url);
      const data = await response.json();
      const gdscLeadData = data.filter(member => member.position === "gdsclead");
      setGdscLeadData(gdscLeadData);
      console.log(gdscLeadData);
      setSelectTenure(selectedTenure);
      setSelectData([]);
    } catch (error) {
      console.error("Error filtering events:", error);
    }
  };

  useEffect(() => {
    handleDomainChange(selectDomain);
    console.log('aaaaaa');
  }, [selectDomain]);

  useEffect(() => {
    if (selectTenure && selectDomain) {
      handleDomainChange(selectDomain);
    }
  }, [selectTenure]);

  const handleFilterChange = async (selectedDomain) => {
    try {
      let url = `https://gdscbackend.vercel.app/ourteam/filter?domain=${selectedDomain}&tenure=${selectTenure}`;
      console.log(selectedDomain);
      console.log(selectTenure);
      const response = await fetch(url);
      const data = await response.json();
      const filteredData = data.filter(member => member.position === "domainlead");
      setSelectData(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error('Error filtering events:', error);
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
        onFilterChange={handleTenureChange}
      />
      <About data={gdscLeadData.length > 0 ? gdscLeadData : allData} variant="yellow" />
      <DomainSection
        heading="Domain members"
        current="development"
        data={DomainData}
        onDomainChange={setSelectDomain}
        leadData={selectData}
        variant="team"
      ></DomainSection>
    </>
  );
}

export default TeamsPage;
