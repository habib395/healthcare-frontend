import React from "react";
import Button from "../../shared/Button";

const Partner = () => {
  return (
    <div className="py-10">
      <div className="w-1/2">
        <img
          src="https://i.ibb.co/tPzxrqvJ/cheerful-confident-multiracial-medics.jpg"
          alt=""
          className="relative h-[400px] w-[400px] rounded-2xl"
        />
        <img
          src="https://i.ibb.co/Cp6gQLwD/closeup-business-handshake.jpg"
          alt=""
          className="absolute top-[8300px] border-2 left-72 h-[400px] w-[400px] rounded-2xl"
        />
      </div>
      <div className="pt-64">
        <h2 className="text-2xl text-blue-600 py-4">
          Become a Corporate Partner
        </h2>
        <h1 className="text-6xl py-4 font-bold">
          Empower your workforce with <br />
          seamless Healthcare <br />
          Solutions
        </h1>
        <p className="text-3xl py-4 text-gray-500">
          Ensure the well-being of your employees with our comprehensive
          healthcare platform, offering convenient healthcare packages which
          includes online consultations, health records, OPD/IPD benefits and
          personalized care management.
        </p>
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default Partner;
