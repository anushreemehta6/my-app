import React from 'react'
import Heading from '../_wrappers/heading'
import ProjectFlipCard from './projectFlipCard'
import { Writing, writings } from '../constants/writing'
import Writingcode from './Writingcode'

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 relative my-12" >
        <Heading> Beyond the Code</Heading>
        <p className="text-center mt-4 text-sm md:text-lg">A collection of technical blogs, whitepapers, research, and developer-focused content created across Web3, blockchain, and modern technologies.</p>
      
        <div className="grid grid-cols-12 gap-6 auto-rows-auto mt-8">

        {writings.map((writing) => (
          <Writingcode
            key={writing.id}
            title={writing.name}
            image={writing.image}
            description={writing.description}
            link={writing.link}
          />
        ))}

      </div>


      
    </div>
  )
}

export default Blogs
