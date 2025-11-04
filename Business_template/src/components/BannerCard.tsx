const BannerCard = ({ image }) => {
  return (
<div className="w-full h-[137px] overflow-hidden rounded-2xl shadow-lg">
  <img
    src={image}
    alt="banner"
    className="w-full h-full object-fill transition-transform duration-700 hover:scale-105"
  />
</div>
  );
};

export default BannerCard;
