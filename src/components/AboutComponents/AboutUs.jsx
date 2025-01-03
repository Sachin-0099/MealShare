import React from 'react'

const AboutUs = () => {
  return (
    
    <div className="flex flex-col items-center p-0 mt-0">

    
    <div className="bg-black w-screen h-72  flex flex-col justify-center items-center mt-0 mb-4 ">
   <h1 className="text-5xl font-bold text-center my-0 text-white -mt-8">About</h1>

    
<p className="text-2xl text-center mb-6 text-white mt-2">
  One small act of kindness can feed a soul and ignite hope in countless hearts.
</p>
   </div>

     
   <div className="flex justify-center items-center gap-20 mb-14 -mt-20 ">
  <img
    src="/Images/about.jpeg"
    alt="About"
    className="w-[15vw] h-[30vh] object-cover rounded-lg"
  />
  <img
    src="/Images/boys.jpeg"
    alt="Boys"
    className="w-[17vw] h-[20vh] object-cover rounded-lg"
  />
  <img
    src="/Images/groups.jpeg"
    alt="Groups"
    className="w-[15vw] h-[30vh] object-cover rounded-lg"
  />
  <img
    src="/Images/women.jpeg"
    alt="Women"
    className="w-[17vw] h-[20vh] object-cover rounded-lg"
  />
</div>


  
      <h3 className="text-3xl mb-4 w-[740px] mx-auto relative ml-[94px] tracking-wide">
  We make sure your food is delivered to those who need them properly and hygienically
</h3>






<div className="text-sm mb-16 flex space-x-40 px-4 -ml-[2vw] text-justify">
  <p className="w-[35vw] tracking-wider space-x-2 ">
    At [Project Name], we believe that no one should go to bed hungry. Our mission is simple: to combat food
    insecurity and ensure that nutritious meals reach those who need them the most. We aim to build a compassionate
    community where every individual has access to the food they need to thrive, regardless of their circumstances.
  </p>
  <p className="w-[35vw] tracking-wider space-x-2">
    At [Project Name], we believe that no one should go to bed hungry. Our mission is simple: to combat food
    insecurity and ensure that nutritious meals reach those who n2ed them the most. We aim to build a compassionate
    community where every individual has access to the food they need to thrive, regardless of their circumstances.
  </p>
</div>



<div id="need" className="flex flex-col md:flex-row items-center md:items-start mb-8">

  <div className="flex flex-col md:flex-row items-center md:items-start gap-40">

  <div className="flex flex-col gap-4">
    <img
      src="/Images/groups.jpeg"
      alt="Group 1"
      className="w-64 h-55 object-cover"
    />
    <img
      src="/Images/groups.jpeg"
      alt="Group 2"
      className="w-64 h-55 object-cover -mt-36 ml-16"
    />
  </div>
  


  <div id="need1" className="flex flex-col text-left md:ml-8 max-w-lg">
    <p className="text-4xl font-semibold mb-4">Why we do it?</p>
    <p className="text-sm text-justify">
      Food is a basic human right, yet millions of people around the world, including right here in our own
      communities, struggle to put enough food on the table. Hunger is not just a physical need—it impacts mental
      well-being, education, and productivity.
      <br />
      <br />
      By providing food to those in need, we aim to not only alleviate hunger but also empower individuals and
      families to lead healthier, happier lives. Our work is grounded in the belief that every person deserves
      dignity, respect, and the chance to thrive.
    </p>
    <hr className="border-t-2 border-gray-300 my-4" />

  </div>
  
</div>

</div>

<hr className="border-t-2 border-gray-500 my-4" />
</div>


  )
}

export default AboutUs
