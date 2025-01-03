import React from 'react';
import PeopleCard from './PeopleCard';

const data = [
  {
    id: 1,
    profileImg: "Images/profile.jpeg",
    name: "Sachin Kumar Singh",
    title: "Tech Lead",
    description: "He leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
  {
    id: 2,
    profileImg: "Images/profile.jpeg",
    name: "Rana Bhavesh",
    title: "Tech Lead",
    description: "He leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
  {
    id: 3,
    profileImg: "Images/profile.jpeg",
    name: "Prince Raj",
    title: "Tech Lead",
    description: "He leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
  {
    id: 4,
    profileImg: "Images/profile.jpeg",
    name: "Priya Dwivedi",
    title: "Frontend",
    description: "She leads the technical development of FDS. From designing the intelligent matching algorithms to ensuring platform scalability, his technical acumen brings our vision to life. Abhay is passionate about using technology to solve real-world problems"
  },
];

const getPositionClassName = (id) => {
  switch (id) {
    case 1:
      return 'top-0 left-32 transform translate-x-1/5'; // Sachin's card - top left
    case 2:
      return 'top-[0px] left-[50%] transform translate-x-1/5'; // Rana's card - more vertical gap
    case 3:
      return 'top-[160px] left-[25%]'; // Prince's card - bottom left
    case 4:
      return 'top-[160px] left-[65%]'; // Priya's card - moved more to the right
    default:
      return '';
  }
};

const PeopleSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-6 mt-24">Meet the people Behind the Mission</h2>
      <p className="text-1xl text-center mb-16 tracking-wide">
        Our passionate team is dedicated to creating a world where no food goes to waste, and no one goes hungry.
      </p>

      <div className="relative grid grid-cols-2 gap-10 m-5 p-4">
        {data.map((person) => (
          <div key={person.id} className={`absolute ${getPositionClassName(person.id)}`}>
            <PeopleCard {...person} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PeopleSection;
