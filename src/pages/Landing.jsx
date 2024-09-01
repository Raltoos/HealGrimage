import bg1 from "../assets/bg-1.jpg";
import hospital from "../assets/hospital.jpg";
import QuoteForm from "../components/QuoteForm";
import India from "../assets/india.svg";
import Arrow from "../assets/arrowDown.svg";
import HealthCard from "../components/HealthCard";
import { features } from "../assets/features";
import FeatureCard from "../components/FeatureCard";

const Landing = () => {
  return (
    <div className="flex w-full h-fit flex-col bg-[#FFFFFF] text-black">
      <div className="flex h-[856px] w-full overflow-hidden">
        <img src={bg1} alt="" className="w-[900px] h-[856px]" />
        <div className="text-[#000000] w-full h-full flex flex-col items-center mt-10">
          <div className="text-center w-[75ch] pb-10 text-lg">
            {'"T͟o͟p͟ D͟o͟c͟t͟o͟r͟s͟ and L͟u͟x͟u͟r͟y͟ H͟o͟t͟e͟l͟s͟ to W͟e͟l͟l͟n͟e͟s͟s͟ R͟e͟t͟r͟e͟a͟t͟s͟"'}
          </div>
          <img src={India} alt="" className="w-[200px]" />
          <div className="w-[680px] text-center">
            <h1 className="text-2xl font-karma">
              Discover World-Class Healthcare in India:
            </h1>
            <h2 className="text-3xl font-karma">
              Exceptional Treatments, Unmatched Value
            </h2>
          </div>
          <img src={Arrow} alt="" className="h-[350px] w-[140px] mt-2" />
          <div className="bg-[#052560] text-white w-full p-3 flex justify-center">
            <p className="px-10 pb-10 mb-3 w-[70ch] text-justify font-Poppins">
              Welcome to HealthGrimage, where medical excellence meets enriching
              travel experiences. Our innovative web app seamlessly integrates
              world-class medical care with a vibrant tourism experience in
              India. Explore top hospitals and wellness centers through
              immersive VR previews, allowing you to make informed decisions
              from anywhere. Enjoy all-inclusive AYUSH packages that not only
              cover your hospital visits but also provide exceptional
              accommodation, dining, travel, and sightseeing opportunities. Our
              secure digital health card streamlines your medical journey,
              tracking your health history and offering tailored insurance for a
              worry-free experience.
            </p>
          </div>
        </div>
      </div>

      <div
        id="features"
        className="w-full flex flex-col items-center font-Poppins h-[900px] justify-center gap-40 bg-white text-black"
      >
        <h1 className="text-4xl">Benefits of HealGrimage</h1>
        <div className="grid grid-cols-3 gap-20">
          {features.map((feature, index) => (
            <FeatureCard
              image={feature.image}
              name={feature.name}
              key={index}
              description={feature.description}
            />
          ))}
        </div>
      </div> 

      <div
        id="info"
        className="w-full flex items-center font-Poppins h-[500px] justify-center gap-40 bg-[#052560] text-white"
      >
        <div className="p-5 ml-20">
          <h2 className="text-3xl">Revolutionizing Medical Tourism</h2>
          <p className="mt-5 w-[62ch]">
            HealGrimage is at the forefront of transforming medical tourism with
            our groundbreaking digital health card, utilizing blockchain
            technology to keep your data decentralized and secure. This
            revolutionary approach ensures data integrity and privacy, providing
            you with a robust and transparent system for managing your health
            information. Our digital health card seamlessly integrates with your
            medical journey, offering easy access to your health history,
            tailored insurance options, and real-time updates.
          </p>

          <button className="rounded-xl bg-[#CEF4EB] text-[#052560] p-2 mt-5">
            Get yours for free!
          </button>
        </div>
        <div className="w-full pb-24 pl-20">
          <HealthCard />
        </div>
      </div>

      

      <div id="section" className="w-full flex items-center">
        <QuoteForm />
        <img src={hospital} alt="" className="w-[800px] h-auto" />
      </div>
    </div>
  );
};

export default Landing;
