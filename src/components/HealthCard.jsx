import passport from "../assets/passport.svg";

const HealthCard = () => {
  return (
    <div className="w-full h-[300px] text-black flex justify-center">
        <img src={passport} alt="" className="h-[400px]"/>
        <div className="bg-[#5384AC] h-[100px] w-[281px] relative right-[281px] top-[300px] rounded-r-2xl text-[#F4CA81] text-center font-semibold font-Poppins"><p className="mt-5">HEALTH PASSPORT OF INDIA</p></div>
    </div>
  )
}

export default HealthCard
