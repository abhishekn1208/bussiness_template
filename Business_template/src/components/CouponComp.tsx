import Coupon from "./Coupon";

const CouponComponent : React.FC = ()=>{
    const coupons = [
        {
            _id : 1,
            discount : 30,
            description : "Get 30% Off! Don’t miss out on our limited-time offer. Shop your favorites and save big today!"
        },
         {
            _id : 2,
            discount : 50,
            description : "Get 50% Off! Don’t miss out on our limited-time offer. Shop your favorites and save big today!"
        }
    ]
    return(
        <div className="w-full rounded-lg bg-white p-4 shadow-md space-y-6">
            <h1 className="text-lg font-semibold border-b pb-1 mb-3 text-gray-800">Coupon</h1>
            <div>
                <input type="text" placeholder="Apply Coupon" 
                className="border border-gray-300 p-4 rounded-md w-[350px]"
                />
            </div>
           {
            coupons && coupons.length>0 ? (
                coupons.map((coupon,index)=>(
                    <Coupon coupon={coupon}/>
                ))
            ) : (
                <div>
                Sorry!!Coupon Not Available
                </div>
            )
           }
           <div className="flex items-center justify-center">
            <button className="text-[12px] font-bold">View more</button>
           </div>
        </div>
    )
}

export default CouponComponent;
