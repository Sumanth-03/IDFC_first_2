import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Nav from "./nav";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,Input 
  } from "@material-tailwind/react";

import Swiggy from '../Assets/Swiggy.svg'
import Zepto from '../Assets/Zepto.svg'
import Youtube from '../Assets/Youtube.svg'
import Audible from '../Assets/Audible.svg'
import Netmeds from '../Assets/Netmeds.svg'
import Mail from '../Assets/Mail.svg'

function Offer (){
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(true);

    const handleOpen = () => setOpen(!open); 
    const handleClick = (data) =>{
        navigate('/product' ,{state:data})
    }
    const handleClickBack = () =>{
        navigate('/')
    }
   

    return(
        <>
        <Nav></Nav>
        <div className="overflow-scroll">
        <div className="flex flex-row justify-between mt-20">
            <button onClick={handleClickBack} className="text-lg font-bold bg-transparent flex flex-row m-2" >
            <span className="text-xl mx-2">&lt;</span>
             My Activation Benefits!
            </button>
            <button className="bg-primary  p-2 rounded-xl text-white font-bold px-6">
              More ways to Save &gt;
            </button>
        </div>
        <main className="text-center max-w-[1200px] m-20">
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md ">
                <div className="w-80"><img src={Swiggy} className="h-7 ml-2"></img></div>
                <sapn className=''>12 Free Deliveries</sapn>
                <button onClick={()=>handleClick('Swiggy')} className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto">
                    Redeem
                </button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Zepto} className="h-7 ml-2"></img></div>
                <sapn className=''>3 Month Subscription</sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('Swiggy')}>Redeem</button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Youtube} className="h-7 ml-2"></img></div>
                <sapn className=''>2 Month Subscription</sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('Swiggy')}>Redeem</button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Audible} className="h-7 ml-2"></img></div>
                <sapn className=''>2 Month Subscription</sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('Swiggy')}>Redeem</button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Netmeds} className="h-7 ml-2"></img></div>
                <sapn className=''>6 Free Deliveries</sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('Swiggy')}>Redeem</button>
            </div>
            <button className="float-end m-10 p-2 text-white bg-primary rounded-xl text-xl font-bold px-6" onClick={handleOpen}>
                Send to my email
            </button>
        </main>
        <Dialog open={open} handler={handleOpen} size={'xs'} className="flex flex-col justify-center">
                <div className="w-full m-2">
                    <img src={Mail} className="m-auto"></img>
                </div>
                <DialogHeader className="m-auto flex flex-col">
                    Great! Here are your discounts.
                    <p className="font-light text-sm m-2">Where do you want your benefits to be sent to?</p>
                </DialogHeader>
                <DialogBody className="my-4">
                    <Input label="Enter email address" size="lg" />
                    <p className="font-light text-xs">*Discounts will be sent to this email address</p>
                </DialogBody>
                <DialogFooter>
                <Button
                    variant="text"
                    className="bg-primary m-auto"
                >
                    <span className="text-white font-medium mx-4" onClick={()=>setOpen(false)}>Send Discout Codes</span>
                </Button>
                </DialogFooter>
            </Dialog>
       </div>
        </>
    )
}
export default Offer