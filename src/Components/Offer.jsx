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
import flig from '../Assets/flig.png'
import mailsmall from '../Assets/email.svg'
import { makeApiCallPost } from "../Services/Api";

function Offer (){
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(true);
    const [sessionId, setSessionId] = React.useState('');
    const [virtualId, setVirtualId] = React.useState('');


    const handleOpen = () => setOpen(!open); 
    const handleClick = (data) =>{
        navigate('/product' ,{state:{vouch:data, offertext:offertext}})
    }
    const handleClickBack = () =>{
        navigate('/')
    }

    // useEffect(() => {
    //     if(!sessionId){
    //     makeApiCallPost()
    //     .then((response) => {
    //       if(response.data?.sessionId){
    //         setSessionId(response.data?.sessionId)
    //         setVirtualId(response.data?.virtualId)

    //       }
          

    //     })
    //     .catch((e) => {console.log("err", e); })

    //     }
       
     
    // },[]);

    const offertext =[
         "Swiggy eVoucher Worth 200 Rs",
        "3 Month Subscription Worth 599 Rs",
        "2 Month Subscription Worth 599 Rs",
        "2 Month Subscription Worth 303 Rs",
        "6 Free Deliveries Worth 999 Rs",
        "Zero convenience Fee Flight Booking Worth 900 Rs"
    ]
   

    return(
        <>
        <Nav></Nav>
        <div className="overflow-y-scroll overflow-x-clip h-screen">
        <div className="flex flex-row justify-end mt-20 mr-44">
            <button  className="text-lg font-bold bg-transparent flex flex-row m-2" >
            {/* <span className="text-xl mx-2">&lt;</span>
             My Activation Benefits! */}
            </button>
            <button className="bg-primary  p-2 rounded-xl text-white font-bold px-6" onClick={()=>{window.open('https://idfcrewards-sg.cheggout.com/')}}>
              More Ways to Save &gt;
            </button>
        </div>
        <main className="text-center max-w-[1200px] m-20">
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md ">
                <div className="w-80"><img src={Swiggy} className="h-7 ml-2"></img></div>
                <sapn className='mt-2'>Swiggy eVoucher Worth <span className='font-semibold'>₹200</span></sapn>
                <button onClick={()=>handleClick('0')} className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto">
                    Redeem
                </button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Zepto} className="h-7 ml-2"></img></div>
                <sapn className='mt-2'>3 Month Subscription Worth <span className='font-semibold'>₹599</span></sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('1')}>Redeem</button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Youtube} className="h-7 ml-2"></img></div>
                <sapn className='mt-2'>2 Month Subscription Worth <span className='font-semibold'>₹599</span></sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('2')}>Redeem</button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Audible} className="h-7 ml-2"></img></div>
                <sapn className='mt-2'>2 Month Subscription Worth <span className='font-semibold'>₹303</span></sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('3')}>Redeem</button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={Netmeds} className="h-7 ml-2"></img></div>
                <sapn className='mt-2'>6 Free Deliveries Worth <span className='font-semibold'>₹999</span></sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('4')}>Redeem</button>
            </div>
            <div className="p-4 m-2 flex flex-row border border-gray-400 rounded-xl shadow-md  ">
            <div className="w-80"><img src={flig} className="h-9 ml-4"></img></div>
                <sapn className='mt-2'>Zero convenience Fee Flight Booking Worth <span className='font-semibold'>₹900</span></sapn>
                <button className="border border-primary text-primary bg-white font-bold px-6 p-2 rounded-lg ml-auto" onClick={()=>handleClick('5')}>Redeem</button>
            </div>
            
            <button className="float-end m-2 p-2 text-white bg-primary rounded-xl text-xl font-bold px-6 flex" onClick={handleOpen}>
                Send a Copy <img src={mailsmall} className="pl-2 h-8 w-8"></img>
            </button>
            <div className="py-20"></div>
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