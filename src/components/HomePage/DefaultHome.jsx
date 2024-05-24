import React from "react";
import FullLogo from "../FullLogo";
import { FaGlobe, FaUserTie, FaTags, FaShieldAlt } from "react-icons/fa";

const DefaultHome = () => {
  return (
    <div className="w-full max-w-maxContent mx-auto px-4 my-4">
      <h1 className="text-lg font-medium">Why Choose Us?</h1>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

const Card = ({ icon, title, description }) => (
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        {icon}
        <h3 className="text-base">{title}</h3>
      </div>
      <div className="card-back">
        <p className="text-sm text-gray-500 font-thin leading-5 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => (
  <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-2">
    <Card
      icon={<FaGlobe size={50} className="text-gray-500 w-[30px]"/>}
      title="Global Destinations"
      description="Discover and book tours in exciting and exotic locations worldwide."
    />
    <Card
      icon={<FaUserTie size={50} className="text-gray-500 w-[30px]" />}
      title="Expert Guides"
      description="Travel with knowledgeable guides passionate about sharing their culture."
    />
    <Card
      icon={<FaTags size={50} className="text-gray-500 w-[30px]"/>}
      title="Competitive Pricing"
      description="Enjoy high-quality tours at competitive, transparent prices with no hidden fees."
    />
    <Card
      icon={<FaShieldAlt size={50} className="text-gray-500 w-[30px]"/>}
      title="Safe and Secure"
      description="Your safety is our priority with rigorous safety protocols and reliable operators."
    />
  </div>
);

export default DefaultHome;
