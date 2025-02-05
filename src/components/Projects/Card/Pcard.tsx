import React from "react";

interface PcardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string | undefined;
}

const PcardRight: React.FC<PcardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex gap-6 justify-items-center items-center mx-auto">
      <div className="hidden md:block">
        <h2 className="font-drukXXCondTrial text-[12rem] tracking-[4] leading-zero uppercase text-start">{title}</h2>
        <p className="font-medium text-xl leading-zero uppercase text-start">{description}</p>
      </div>
      <div className="max-w-[600px] max-h-[400px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="z-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default PcardRight;
