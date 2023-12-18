import React from 'react';
import MemberCard from '../ui/card/Member';

const TheTeam = ({ listTeam, title }: { listTeam: any[]; title?: string }) => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-center font-bold mb-10 text-3xl lg:text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-light-2 py-3">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        {listTeam?.map((item, idx) => (
          <div
            key={idx}
            className="w-full mt-24 sm:w-[85%] lg:w-[32%] mx-auto sm:mb-30"
          >
            <MemberCard
              memberName={item.memberName}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
