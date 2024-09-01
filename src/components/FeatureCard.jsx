/* eslint-disable react/prop-types */
const FeatureCard = ({ image, name, description }) => {
  return (
    <div className="flex flex-col w-[300px] h-[270px] rounded-lg bg-[#1a54c1] text-white p-4 items-center hover:bg-white hover:border hover:border-[#052561] hover:text-black transition-all hover:scale-105">
      <div className="rounded-full h-[350px] w-[150px] bg-[#052561] relative bottom-[40px] flex justify-center items-center">
        <img src={image} alt="" className="h-[60px]" />
      </div>
      <div className="flex flex-col h-full w-full items-center pb-5 gap-5 break-words">
        <h2>{name}</h2>
        <p className="text-center w-[20ch]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
