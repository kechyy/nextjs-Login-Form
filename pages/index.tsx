import type { NextPage } from 'next'
import Head from 'next/head'
import Register from './Register';


const Underline = ({color}: {color: string}) => <div className={`w-10 border-2 ${color=='white'?'border-white':'border-green-500'} m-auto mb-5 mt-3`}></div>

const Home: NextPage = () => {
  
  return (
   <Register />
  )
}

export default Home
