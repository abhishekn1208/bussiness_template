const Coupon =({coupon})=>{
    return(
        <div className="bg-gray-700 w-[350px] h-[161px] rounded-md flex flex-col justify-around px-2">
            <div className="flex items-center justify-between">
                <h4 className="text-[18px] font-bold text-white">{coupon.discount}% OFF</h4>
                <button
                className="w-[43px] h-[21px] font-bold text-yellow-200 text-[14px]"
                >Apply</button>
            </div>
            <span
            className="w-[248px] h-[54px] font-bold text-[12px] text-gray-200"
            >{coupon.description}</span>
        </div>
    )
}

export default Coupon;
