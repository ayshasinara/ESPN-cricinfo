import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import LiveScores from './LiveScores'
import Result from "./Result"
import Videos from './Videos'
import SeriesPage from './SeriesPage'
import TeamsPage from "./TeamsPage"
import News from './News'
import Features from './Features'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/livescores" element={<LiveScores />} />
            <Route path="/results" element={<Result/>} />
            <Route path="/videos" element={<Videos/>} />
            <Route path="/series" element={<SeriesPage/>} />
            <Route path="/teamspage" element={<TeamsPage/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/features" element={<Features/>} />

        </Routes>
    </div>
  )
}

export default MainRoutes