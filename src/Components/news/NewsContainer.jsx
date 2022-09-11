import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { getNewsData } from '../../Redux/data/action';
import SingleNewsComponent from './SingleNewsComponent'
function NewsContainer() {
  const data = useSelector(state => state.AppDataReducer.newsdata)
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewsData());
  }, [])
console.log(data)
  return (
    <MainWrapper>
      <HeadingWrapper>
        Latest News
      </HeadingWrapper>
      <div>
        {data.map((iteam) => {
          return <SingleNewsComponent iteam={iteam} key={iteam.id} />
        }
        )}
      </div>
    </MainWrapper>
  )
}

export default NewsContainer
const MainWrapper = styled.div`
    margin: 30px 0px 20px 20px;
    width:95%;
    padding-top: 20px;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const HeadingWrapper = styled.div`
  text-align: left;
    font-weight: bold;
    font-size:x-large;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left: 16px;
    border-bottom: 0.1px solid #eeeff2;
`