'use client'

import { useRef } from 'react'
//import all assets
import './page.css'
import { useSearchParams } from 'next/navigation'

//The default function
const page = ({searchParams} : {searchParams : {src: string}}) => {

  let searchparams = useSearchParams();

  return (
    <>
      <div className='contanervideo'>
        <div  className='videorad'>
          <video controls className='video' src={searchparams.get("src")} autoPlay></video>
        </div>
      </div>
    </>
  )
}

//expotr the default function
export default page;