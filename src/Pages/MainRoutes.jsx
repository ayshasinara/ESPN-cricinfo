import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Features from './Features'
import News from './News'
import Videos from './Videos'
import SeriesPage from './SeriesPage'
import LiveScorePage from './LiveScorePage'
import TeamsPage from "./TeamsPage"
import { Scorecard } from './Scorepage/Scorecard'




const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/livescores" element={<LiveScorePage />} />

        <Route path="/videos" element={<Videos />} />
        <Route path="/series" element={<SeriesPage />} />

        <Route path="/news" element={<News />} />
        <Route path='/features' element={<Features />} />

        <Route path="/teamspage" element={<TeamsPage />} />
        <Route path="/scorecard" element={<Scorecard/>} />



      </Routes>
    </div>
  )
}

export default MainRoutes