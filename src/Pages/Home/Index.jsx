import React, { useCallback, useEffect } from 'react'
import HomeView from './View'
import {  useDispatch } from 'react-redux'
import { getItems } from '../../Redux/services/apiServices'


const Home = () => {
  const dispatch = useDispatch()

  
  const fetchData = useCallback(async() => {
    const res = await dispatch(getItems())
    console.log(res)
  }, [])


  useEffect(() => {
    fetchData()
  }, [])

  return <HomeView />
}

export default Home