import React from 'react'
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import car from "./Car.css"


const Carousalbox = () => {

    const Breakpoints =[
        {width:1200, itemsToShow:7},
    ]
  return (
    <div className='carousel-wrapper'>
        <Carousel pagination={false} breakPoints={Breakpoints}>
            <Card bgImage={"url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/336600/336674.jpg)"} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340800/340880.png" />
            <Card bgImage={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/336700/336705.jpg"} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340800/340881.png" />
            <Card bgImage={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/317700/317741.png"} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/327300/327356.png" />
            <Card bgImage={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/334200/334270.jpg"} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/334200/334271.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/329100/329140.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317739.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317757.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/316900/316984.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317600/317635.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317755.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317749.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317737.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317757.png" />
            <Card bgImage={""} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317739.png" />
        </Carousel>
    </div>
  )
}

export default Carousalbox