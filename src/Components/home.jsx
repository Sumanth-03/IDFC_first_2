import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Spinner,
    IconButton,
  } from "@material-tailwind/react";

import Logo from '../Assets/Logo.svg'
import Poster from '../Assets/Poster.svg'
import Swiggy from '../Assets/Swiggy.svg'
import Zepto from '../Assets/Zepto.svg'
import Youtube from '../Assets/Youtube.svg'
import Audible from '../Assets/Audible.svg'
import Netmeds from '../Assets/Netmeds.svg'
import flig from '../Assets/flig.png'
import Special from '../Assets/Special.svg'
import Lock from '../Assets/Lock.svg'
import dailogBg from '../Assets/dialogbgnew.jpg'
import play from '../Assets/Play-Pause.svg'
import dailogImg from '../Assets/Dailog_img.svg'
import QRcode from '../Assets/QRcode.svg'
import "./style.css"
import { makeApiCallGet, makeApiCall, makeApiCallWithAuth, makeApiGetCallWithAuth, makeSwinkApiCallWithAuth } from '../Services/Api' 

function Home (){
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [pinSet, setPinSet] = useState(false);

    const [isloading, setIsloading] = useState(false);
    const [modal, setModal] = useState('')
    const [errmessage, setErrmessage] = useState('')
    const [activate, setActivate] = useState(false)

    
    const handleOpen = () => setOpen((open)=>!open); 

    const queryParams = new URLSearchParams(window.location.search);
    const hdnRefNumber = queryParams.get('hdnRefNumber');
    const transactionId = queryParams.get('transactionId');
    const amount = queryParams.get('amount');

    // if(hdnRefNumber && !modal && !isloading){
    //     setIsloading(true);
    //     let data ={
    //       order_id: hdnRefNumber,
    //       razorpay_payment_id: transactionId,
    //       razorpay_amount: "1",//amount,
    //       offer_id: "179",
    //     }
    //     makeApiCallWithAuth('checkPaymentStatus', data)
    //     .then((response) => {
    //       console.log("getpayres",response.data)
    //       if(response?.data?.status === 200 || response?.data?.status === 201){
    //         //sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
    //         //navigate('/redeem')
    //         setModal('success');
    //         setIsloading(false);
    //         navigate('/offers');
    //         //setEnabled(true)
    //         //setBtntext(true)
          
    //       }
    //       else{
    //         if(!modal){
    //         setModal('failed')
    //         setErrmessage(response.data?.message)
    //         setIsloading(false);
    //         }
    //       }
    
    //     })
    //     .catch((e) => {console.log("err", e); setModal('failed');setIsloading(false);})
    
        
    //    }

    useEffect(() => {
    if(transactionId){
      navigate('/offers');
    }
  },[]);

    // useEffect(() => {
    //     if(!hdnRefNumber){
    //     makeApiCallGet()
    //     .then((response) => {
    //       console.log("tok",response.data)
    //       if (response.data?.result) {
    //         sessionStorage.setItem('token', response.data?.result)
    //       }

    //     })
    //     .catch((e) => {console.log("err", e); })
    //    }

    // },[]);

    const handlePay = ()=>{
        if(!activate){
            return setActivate(true)
        }
        setOpen(false)
        setIsloading(true);
        setActivate(false)
       // navigate('/offers');
    //    var min = 100000000000000;
    //    var max = 999999999999999999;
    //     var rand =  min + (Math.random() * (max-min));
    //    let indata = {
    //     invoiceNumber: rand,
    //     amount: "1",
    //     terminalID: "S9FII0",
    //     dateAndTime: "2024-07-31 10:17:24",
    //     hdnRefNumber: "1210202748731599406",
    //     returnURL: "https://idfcdemo2.z29.web.core.windows.net",
    //     bins: [411111,401561,525567,428102,440523,549947,515349,439992,444341,653019,52170365,554283,5542830,515349,401613,421366,608116,608118,401138,401347,464163,423537,423579,423610,652350],
    //     discount: "20",
    //     onlyCardBins: true,
    //     backURL: "google.com"
    // }

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json',
  //           'channel': 14,
  //           'auth_token': 'FREFA45D$B2#18842765#992',
        
  //      },
  //     body: JSON.stringify(indata)
  // };



  //   fetch("https://sandbox.swinkpay-fintech.com/api/v2/plugin/pay", requestOptions)
  //       .then(response => response.json())
  //       .then(data => 
  //         {console.log("fd",data)}
  //       );
   let indata ={
    test: "1"
   }
 

   makeApiCall('validationCheckDemo', indata)
    .then((response) => {
      console.log(response?.data?.data?.data)
      if(response?.data?.data?.data?.url){
        let paymenturl = response.data.data.data.url;
        setIsloading(false);
        window.location.href = paymenturl;
        }
      else if(response?.data?.data?.data?.errorstring === "Failed"){
        setIsloading(false);
        if(!modal){
          setModal('failed')
          setErrmessage('Something Went Wrong')
          //setIsloading(false);
          }
      
      }
      else if(response?.data?.status === 200){
        sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
        setIsloading(false);
        navigate('/redeem')
      }
      else{
        setIsloading(false);
        if(!modal){
          setModal('failed')
          setErrmessage(response.data?.message)
          //setIsloading(false);
          }
      }
       
    })
    .catch((e) => {console.log("err", e);setIsloading(false);})
   
        
    // makeApiCallWithAuth('validationCheck',{mop: 4, offer_id: "179"})
    // .then((response) => {
    //   console.log(response?.data?.data?.url)
    //   if(response?.data?.data?.url){
    //     let paymenturl = response.data.data.url;
    //     setIsloading(false);
    //     window.location.href = paymenturl;
    //     }
    //   else if(response?.data?.data?.errorstring === "Failed"){
    //     setIsloading(false);
    //     if(!modal){
    //       setModal('failed')
    //       setErrmessage('Something Went Wrong')
    //       //setIsloading(false);
    //       }
      
    //   }
    //   else if(response?.data?.status === 200){
    //     sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
    //     setIsloading(false);
    //     navigate('/redeem')
    //   }
    //   else{
    //     setIsloading(false);
    //     if(!modal){
    //       setModal('failed')
    //       setErrmessage(response.data?.message)
    //       //setIsloading(false);
    //       }
    //   }
       
    // })
    // .catch((e) => {console.log("err", e);setIsloading(false);})
   
    
    }


    return(
        <div className="overflow-y-scroll overflow-x-clip h-screen flex flex-col md:flex-row">
             {isloading && <div className="spinner-overlay z-30">
          <div className="spinner-container">
          <Spinner  size="lg" classNames={{circle1: "border-b-[#27374D]"  }}/>
          </div>
          
         </div>}
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:h-screens">
                <div className="w-full bg-primary">
                    <img src={Logo} alt='logo' className="h-14"></img>
                    <h1 className="text-white text-3xl font-body m-10 mx-5 lg:mx-20 min-h-[30vh]">Congratulations on your brand new <span className="text-secondary">IDFC FIRST</span> Bank Credit Card! Activate it now to start your rewarding journey with us.</h1>
                </div>
                <div className="w-full">
                <div
                    className="relative h-[120%] w-[114%]"
                >
                <img
                    src={Poster}
                    alt="poster"
                    className="absolute -top-14 -md:-top-28 lg:-top-28  pr-1"
                />
                 </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 text-center mt-80 md:mt-0">
                <h1 className="text-2xl font-bold text-primary m-5">Unlock Your Exclusive Benefits!</h1>
                <div className="bg-secondary font-medium text-lg py-4 px-10 m-5 rounded-xl">As per RBI guidelines, please activate your card within 30 days of account opening to avoid card closure. Here are some exclusive benefits that come with your card activation:</div>
                <main className="h-screen ">
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Zepto} className="h-7 ml-2"></img></div>
                        <sapn className=''>3 Month Subscription Worth
                        <span className='font-semibold'>₹500</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Youtube} className="h-7 ml-2"></img></div>
                        <sapn className=''>2 Month Subscription Worth <span className='font-semibold'>₹600</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Audible} className="h-7 ml-2"></img></div>
                        <sapn className=''>2 Month Subscription Worth <span className='font-semibold'>₹500</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Netmeds} className="h-7 ml-2"></img></div>
                        <sapn className=''>6 Free Deliveries Worth <span className='font-semibold'>₹1000</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={flig} className="h-9 ml-3"></img></div>
                        <sapn className='mt-1.5'>Zero convenience Fee Flight Booking Worth <span className='font-semibold'>₹1000</span></sapn>
                    </div>
                    <div className="border border-gray-400 rounded-xl shadow-md p-4 m-4">
                        <div className="flex flex-row items-center justify-center">
                        <h1 className="text-2xl">Total Benefits Worth ₹3600</h1><img src={Special} className="h-5"></img>
                        </div>
                        <p className="font-light text-xs my-4">
                        Unlock exclusive benefits with your IDFC card! As an IDFC FIRST bank cardholder, simply activate your card for 
                        online payments and make a payment of just ₹1 to gain access to great offers from premium brands. Enjoy these 
                        exclusive perks and elevate your experience today!
                        </p>
                        <button className="bg-primary rounded-xl px-6 p-2 flex flex-row text-white m-auto" onClick={handleOpen}>
                            <img src={Lock} className="h-5 mr-2"></img>
                            Unlock all for Only ₹1!
                        </button>
                    </div>
                    <div className="py-20"></div>
                </main>
            </div>
            <Dialog open={open} handler={handleOpen} size={'xl'} className="flex flex-col md:flex-row justify-center h-[42rem] overflow-auto">
                {/* <div className="w-full m-2">
                    <img src={dailogBg} className="w-[95%] rounded-xl m-auto -ml-[0.01%]"></img>
                    <img src={play} className="absolute top-[20%] left-[40%]"></img>
                </div> */}
                <div className="md:w-2/5 flex items-center">
                    <img src={dailogImg} className="object-cover"></img>
                </div>
                
                <div className="md:w-3/5 px-2 p-2 flex flex-col">
                <IconButton
                 color="blue-gray"
                 size="sm"
                 variant="text"
                 className="ml-auto p-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-10 w-10"
                        onClick={handleOpen}
            >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </IconButton>
                <div className="rounded-lg shadow-lg m-4">
                <DialogHeader className="m-auto mt-2">Have you activated your card for online transactions?</DialogHeader>
                {activate &&
                    <DialogBody className="!m-0" > 
                        <div className="flex flex-col mb-0">
                            <p className="m-2">1. Download IDFC Bank APP</p>
                            <div className="flex flex-row items-center w-[80%] max-w-96 p-1 border border-gray-400">
                                <img src={QRcode} className="w-24"></img>
                                <span className="p-6 text-center text-sm">Scan QR to Download IDFC Bank App</span>
                            </div>
                            <p className="m-2">2. Select Manage Card to enable online transaction preferences</p>
                            <p className="m-2">3. You can also call us at 1800 10 888 to complete card activation, PIN setup, and transaction preferences.</p>
                        </div>
                    </DialogBody>
                }
                <DialogFooter className="flex flex-row justify-around">
                <div className="flex md:flex-col items-center gap-2">
                    <span>Yes</span>
                    <Button
                    variant="text"
                    onClick={handlePay}
                    className="bg-yellow-600  m-auto"
                >
                    <span className="text-black font-bold mx-4">Unlock My Offers</span>
                    </Button>
                </div>
                
                <div className="flex md:flex-col items-center gap-2">
                <span>No</span>
                <Button
                    variant="text"
                    onClick={handlePay}
                    className="bg-primary m-auto disabled:bg-gray-400"
                    disabled={activate}

                >
                    <span className="text-white font-semibold mx-4">Activate</span>
                </Button>
                </div>
                
                </DialogFooter>
                </div>
                </div>
            
            </Dialog>
        </div>
    )
}
export default Home