import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CurrentCricket from "./SeriesTabs/CurrentCricket";
import FutureSeries from "./SeriesTabs/FutureSeries";
import RecentlyConcluded from "./SeriesTabs/RecentlyConcluded";

const SeriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
   
      <Tabs  background={"#eeeeee"} >
        <TabList
          borderBottom={"2px solid #c7c7c7"}
          background={"white"}
          width={"90%"}
          margin={"auto"}
          // marginLeft={"200px"}
          display={"flex"}
          justifyContent="space-around"
       
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
