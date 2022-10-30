import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getpostData, login, logout } from '../redux/action';
import InfiniteScroll from "react-infinite-scroll-component";
import '../CSS/home.css'
import Nav from './Nav';

const Home = () => {
    const dispatch = useDispatch()
    const[length,setLength] = useState(20)
    useEffect(()=>{
        getpostData(dispatch,length)
    },[])

    const {user} = useSelector((store)=>store)
    // console.log(user)


    let wait
    const handleNext = ( ) =>{
        if(wait)return
        setLength(length+20)
        
        wait = setTimeout(()=>{
            getpostData(dispatch,length+10)
        },1000)
    }

    let Loading = ( ) =>{
      let loaderlength = [1,2,3,4,5,6,7,8,9,0]
      return loaderlength.map((ele)=><div className='LoadingDiv'>
        <div>{'     '}</div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.CsFM2FJTwzsWaVC6q-NCUgHaHa&pid=Api&P=0" alt="" />
      </div>)
  }
  return (
    <>
    <Nav/>
    {/* <button className='LogOutButton' onClick={()=>dispatch(logout())}>Log Out</button> */}
    <InfiniteScroll
          dataLength={user.length}
          next={handleNext}
          hasMore={user.length !== 0}
          loader={<Loading />}

          >
    {
        user.map((ele,idx)=>{
            return <div className='HomeListContainer' key={idx}>
                 <p>{ele.name.title+' '+ele.name.first+' '+ele.name.last}</p>
                 <div className="imageBox">
                    <img src={ele.picture.thumbnail} alt="" />
                 </div>
            </div>
        })
    }
  </InfiniteScroll>
  </>
  )
}

export default Home