import React from "react";
import BusinessHero from "../components/BusinessHero";
import BusinessStats from "../components/BusinessStats";
import BusinessFeatures from "../components/BusinessFeatures";
import BusinessSectors from "../components/BusinessSectors";
import BusinessPlatform from "../components/BusinessPlatform";

const BusinessPage = () => {
  return (
    <main style={{ paddingTop: "80px" }}>
            <BusinessHero />
            <BusinessStats />
            <BusinessFeatures />
            <BusinessSectors />
            <BusinessPlatform />    
    </main>
  );
};

export default BusinessPage;