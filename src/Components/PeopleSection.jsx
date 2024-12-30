import React from 'react';
import PeopleCard from './PeopleCard';

const data = [
  {
    profileImg: "Images/profile.jpeg",
    name: "Sachin Kumar Singh",
    title: "Tech Lead",
    description: "He leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
  {
    profileImg: "Images/profile.jpeg",
    title: "Tech Lead",
    name: "Rana Bhavesh",
    description: "He leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
  {
    profileImg: "Images/profile.jpeg",
    title: "Tech Lead",
    name: "Prince Raj",
    description: "He leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
  {
    profileImg: "Images/profile.jpeg",
    title: "Frontend",
    name: "Priya Dwivedi",
    description: "She leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
];

const PeopleSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-6 mt-24">Meet the people Behind the Mission</h2>
      <p className="text-1xl text-center mb-16 tracking-wide">
        Our passionate team is dedicated to creating a world where no food goes to waste, and no one goes  hungry.
      </p>

      <div className="relative grid grid-cols-2 gap-10 m-5 p-4 ">
        {data.map((person, index) => (
          <div
            key={index}
            className={`absolute  ${
              index === 0
                ? 'top-0 left-32 transform translate-x-1/5' // Sachin's card - top left
                : index === 1
                ? 'top-[0px] left-[50%] transform translate-x-1/5' // Rana's card - more vertical gap
                : index === 2
                ? 'top-[160px] left-[25%]' // Prince's card - bottom left
                : index === 3
                ? 'top-[160px] left-[65%]' // Priya's card - moved more to the right
                : ''
            }`}
          >
            <PeopleCard {...person} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PeopleSection;
