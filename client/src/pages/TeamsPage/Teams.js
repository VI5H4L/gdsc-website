import React from "react";
import PagesHeading from "../../components/PagesHeading/PagesHeadingDiv";
import About from "../../components/Leads/Leads";
import LeadsData from "../../Data/Leads";
import LeadsCard from "../../components/LeadsCard/LeadsCard";
import DomainSection from "../../components/DomainSection/DomainSection";
import DomainData from "../../Data/Domain";
function TeamsPage(props) {
  return (
    <>
      <PagesHeading
        heading={props.heading}
        image1={props.image1}
        image2={props.image2}
        FilterHeading={props.FilterHeading}
        variant={props.variant}
      />
      <About data={LeadsData} variant="yellow" />
      <DomainSection
        heading="Domain members"
        variant="team"
        data={DomainData}></DomainSection>
    </>
  );
}

export default TeamsPage;
