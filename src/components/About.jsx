import React from 'react'

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          sequi amet maxime ipsum odit facere incidunt cupiditate unde adipisci
          asperiores. Beatae eius fuga exercitationem eligendi sunt. Culpa
          soluta repudiandae nostrum commodi, eos explicabo dicta laborum
          voluptatum aperiam rerum deleniti officiis, aliquam iste praesentium
          laudantium labore sapiente consequatur quaerat saepe quae.
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta,
          voluptatem quos quo ex fugit nam quaerat, quam iure velit mollitia
          iste debitis, magni voluptatum commodi? Hic in quas, sit fugit quia
          unde ipsam laudantium inventore numquam itaque suscipit. Soluta,
          asperiores. Blanditiis voluptatibus aspernatur possimus quibusdam
          accusantium repellat ab. Sunt.
        </p>
      </div>
    </div>
  )
}

export default About
