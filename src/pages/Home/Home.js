import React from 'react'
import { useAuth } from '../../context/userContext'
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  const[auth] = useAuth();
  return (
    <div>
    <Carousel/>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </div>
  )
}

export default Home
