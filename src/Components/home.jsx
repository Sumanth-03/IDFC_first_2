import React from "react"
import { useNavigate } from "react-router-dom";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

import Logo from '../Assets/Logo.svg'
import Poster from '../Assets/Poster.svg'
import Swiggy from '../Assets/Swiggy.svg'
import Zepto from '../Assets/Zepto.svg'
import Youtube from '../Assets/Youtube.svg'
import Audible from '../Assets/Audible.svg'
import Netmeds from '../Assets/Netmeds.svg'
import Special from '../Assets/Special.svg'
import Lock from '../Assets/Lock.svg'
import dailogBg from '../Assets/Dailog_bg.svg'
import play from '../Assets/Play-Pause.svg'
import { useEffect } from "react";

function Home (){
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [pinSet, setPinSet] = React.useState(false);

    const handlePinSet = ()=>{setPinSet((!pinSet))}
    const handleOpen = () => setOpen(!open); 

    useEffect(()=>{
        if(pinSet){
            navigate('/offers')
        }
    },[pinSet])

    return(
        <div className="overflow-scroll h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:h-screens">
                <div className="w-full bg-primary">
                    <img src={Logo} alt='logo' className="h-14"></img>
                    <h1 className="text-white text-3xl font-body m-10 mx-5 lg:mx-20 min-h-[30vh]">Congratulations! on your brand new <span className="text-secondary">IDFC FIRST</span> Bank Credit Card. Now step into world of benefits!</h1>
                </div>
                <div className="w-full">
                <div
                    className="relative h-[120%] w-[113%]"
                >
                <img
                    src={Poster}
                    alt="poster"
                    className="absolute -top-20"
                />
                 </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 text-center mt-80 md:mt-0">
                <h1 className="text-2xl font-bold text-primary m-5">Unlock Your Activation Benefits!</h1>
                <div className="bg-secondary font-medium text-lg py-4 px-10 m-5 rounded-xl">As per RBI guidelines, activate your card within 1 st 30 days to avoid card closure.</div>
                <main>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                        <div className="w-80"><img src={Swiggy} className="h-7 ml-2"></img></div>
                        <sapn className=''>12 Free Deliveries</sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-80"><img src={Zepto} className="h-7 ml-2"></img></div>
                        <sapn className=''>3 Month Subscription</sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-80"><img src={Youtube} className="h-7 ml-2"></img></div>
                        <sapn className=''>2 Month Subscription</sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-80"><img src={Audible} className="h-7 ml-2"></img></div>
                        <sapn className=''>2 Month Subscription</sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-80"><img src={Netmeds} className="h-7 ml-2"></img></div>
                        <sapn className=''>6 Free Deliveries</sapn>
                    </div>
                    <div className="border border-gray-400 rounded-xl shadow-md p-4 m-4">
                        <div className="flex flex-row items-center justify-center">
                        <h1 className="text-2xl">Benefits worth ₹ 3,600 </h1><img src={Special} className="h-5"></img>
                        </div>
                        <p className="font-light text-xs my-4">
                            This special package is a token of our gratitude for becoming a IDFC cardholder. 
                            Simply activate your card and make a payment of Rs. 1 to gain access to exclusive 
                            benefits from the premium brands.
                        </p>
                        <button className="bg-primary rounded-xl px-6 p-2 flex flex-row text-white m-auto" onClick={handleOpen}>
                            <img src={Lock} className="h-5 mr-2"></img>
                              Unlock for only ₹ 1
                        </button>
                    </div>
                </main>
            </div>
            <Dialog open={open} handler={handleOpen} size={'xs'} className="flex flex-col justify-center">
                <div className="w-full m-2">
                    <img src={dailogBg} className="w-[95%] rounded-xl m-auto -ml-[0.01%]"></img>
                    <img src={play} className="absolute top-[20%] left-[40%]"></img>
                </div>
                <DialogHeader className="m-auto">Have you set your PIN?</DialogHeader>
                <DialogBody>
                Watch the video to learn how to set the PIN or by calling our 24-hour helpline number 1860 500 1111
                </DialogBody>
                <DialogFooter>
                <Button
                    variant="text"
                    onClick={handlePinSet}
                    className="bg-primary m-auto"
                >
                    <span className="text-white font-semibold mx-4">I have my PIN</span>
                </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}
export default Home