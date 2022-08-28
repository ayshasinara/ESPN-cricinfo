import React from 'react'
import Carousel from 'react-elastic-carousel';

import { SchedualCard } from './SchedualCard';
import "./carousalStyle.css"
export const Carousel1 = ({match,data}) => {
 

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]

  return (
    <div className="carousel-wrapper">
      <Carousel
       itemsToShow={4}
       pagination={false}
       breakPoints={breakPoints}
       itemPadding={[0, 20]}
  onResize={currentBreakPoint => console.log(currentBreakPoint)}

       >
      {data.length === 0 ?
        match.map((item)=>{
      return <SchedualCard  key = {item.id} item={item}/>
    })
    :
    data.map((item)=>{
      return <SchedualCard key = {item.id} item={item}/>
    })
    }
      </Carousel>
    </div>
  )
}
