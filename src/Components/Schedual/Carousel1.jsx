import React from 'react'
import Carousel from 'react-elastic-carousel';
import { SchedualCard } from './SchedualCard';
export const Carousel1 = ({match}) => {
  return (
    <div>
      <Carousel itemsToShow={1}>
      {match.map((item)=>{
      return <SchedualCard key = {item.id} item={item}/>
    })}
      </Carousel>
    </div>
  )
}
