import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CurrentCricket from "./SeriesTabs/CurrentCricket";
import FutureSeries from "./SeriesTabs/FutureSeries";
import RecentlyConcluded from "./SeriesTabs/RecentlyConcluded";

const SeriesPage = () => {
  return (
    <div>
   
      <Tabs  background={"#eeeeee"} >
        <TabList
          borderBottom={"2px solid #c7c7c7"}
          background={"white"}
          width={"55%"}
          marginLeft={"200px"}
       
        >
          <Tab fontWeight="bold">Current Cricket</Tab>
       
          <Tab fontWeight="bold">Future Series/Tournaments</Tab>
          <Tab fontWeight="bold">Recently Concluded</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CurrentCricket />
          </TabPanel>
          <TabPanel>
            <FutureSeries />
          </TabPanel>
          <TabPanel>
            <RecentlyConcluded />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default SeriesPage;
