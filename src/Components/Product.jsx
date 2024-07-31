import React from "react";

import Nav from './nav';

import copy from '../Assets/copy.svg'
import Swiggy from '../Assets/Swiggy.svg'
import Zepto from '../Assets/Zepto.svg'
import Youtube from '../Assets/Youtube.svg'
import Audible from '../Assets/Audible.svg'
import Netmeds from '../Assets/Netmeds.svg'
import Mail from '../Assets/Mail.svg'
import flig from '../Assets/flig.png'

//import swiggy from '../Assets/Swiggy_logo.svg'
import Delevery from '../Assets/Swiggy_Dlelvery.svg'
import icon from '../Assets/Icon.svg'
import { useLocation, useNavigate } from "react-router-dom";

function Product (){

    const navigate = useNavigate();
    function handleClick () {
        navigate('/offers')
    }

    const { state } = useLocation();
    let voucher = state.vouch;
     
    let logos =[
    Swiggy,
    Zepto,
    Youtube,
    Audible,
    Netmeds,
    flig
    ]

    let links =[
        "https://www.swiggy.com",
        "https://www.zeptonow.com",
        "https://www.youtube.com",
        "https://www.audible.in",
        "https://www.netmeds.com",
        "https://www.easemytrip.com"
    ]
    



    return(
        <div className="overflow-y-scroll overflow-x-clip h-screen">
        <Nav></Nav>
        <button className="bg-transparent mx-10 mt-20 p-2" onClick={handleClick}> &lt; Back</button>
        <main className="rounded-xl p-3 mx-10 flex flex-row " style={{ backgroundImage: "linear-gradient(to top, #f46c45, #eea749)" }}>
            <div className="w-1/2">
            <h1 className="text-3xl font-semibold text-white m-10">{state.offertext[voucher]}</h1>
            <div className="bg-white border-dashed border-2 border-black  m-10 flex flex-row w-80 h-10">
                <span className="mr-auto text-xl p-2 -mt-1">COUPON3THIS</span>
                <img src={copy} className="ml-auto p-2"></img>
            </div>
            <h1 className="text-lg font-bold text-white m-10">Vali till: 24 Mar 2024</h1>
            <button className="p-5 bg-white text-turtiary font-bold rounded-xl px-10 mx-10 mb-6" onClick={()=>{window.open(links[voucher])}}>REDEEM NOW</button>
            </div>
            <div className="w-1/2 relative">
            <img src={Delevery} className="absolute bottom-0 h-full" />
            <img src={logos[voucher]} className="absolute top-0 right-0" />
            </div>
        </main>

        <section className="flex md:flex-row flex-col">
            
            <div className="w-full md:w-1/2 m-10 p-5 flex flex-col shadow-lg">
                <h1 className="text-2xl font-bold">Order Details</h1>
                <span className="pt-2">Availed for 1 pts</span>
                <span>Order ID : 22336070437</span>
                <span>1 Nov, 12:05 PM</span>
            </div>
            <div className="w-full md:w-1/2 m-10 p-5 shadow-lg">
            <h1 className="text-2xl font-bold">Quick Links</h1>
                <div className="flex flex-row">
                    <img src={icon} ></img>
                    <div className="p-4">
                        <h1 className="font-bold text-lg">Redeem more points</h1>
                        <div>Redeem more points balance by availing one of the deals and vouchers</div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <img src={icon} ></img>
                    <div className="p-4">
                        <h1 className="font-bold text-lg">Earn Points</h1>
                        <div>Pay using Bank & earn more points</div>
                    </div>
                </div>
            </div>
        </section>
        
        </div>
        
    )
}
export default Product