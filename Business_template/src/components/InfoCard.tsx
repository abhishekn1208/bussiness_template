
type InfoMessage = {
    message : string;
}
const InfoCard=({message} : InfoMessage)=>{
    return(
         <div
      className="
        w-full  mx-auto 
        p-6 rounded-2xl 
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
        text-white text-center font-semibold text-lg
        shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_25px_rgba(228,179,1,0.4)]
        border border-gray-600/50
        transition-all duration-500
        hover:scale-[1.02]
      "
    >
      <p className="text-[#e4b301] text-xl font-bold mb-2">Info</p>
      <p className="text-gray-200">{message}</p>
    </div>
    )
}

export default InfoCard;
