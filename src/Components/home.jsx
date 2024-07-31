import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Spinner
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
import "./style.css"
import { makeApiCallGet, makeApiCall, makeApiCallWithAuth, makeApiGetCallWithAuth, makeSwinkApiCallWithAuth } from '../Services/Api' 

function Home (){
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [pinSet, setPinSet] = useState(false);

    const [isloading, setIsloading] = useState(false);
    const [modal, setModal] = useState('')
    const [errmessage, setErrmessage] = useState('')

    
    const handleOpen = () => setOpen(!open); 

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
        setOpen(false)
        setIsloading(true);
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
                    <h1 className="text-white text-3xl font-body m-10 mx-5 lg:mx-20 min-h-[30vh]">Congratulations! on your brand new <span className="text-secondary">IDFC FIRST</span> Bank Credit Card. Now step into world of benefits!</h1>
                </div>
                <div className="w-full">
                <div
                    className="relative h-[120%] w-[114%]"
                >
                <img
                    src={Poster}
                    alt="poster"
                    className="absolute -top-32 pr-1"
                />
                 </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 text-center mt-80 md:mt-0 overflow-y-scroll">
                <h1 className="text-2xl font-bold text-primary m-5">Unlock Your Activation Benefits!</h1>
                <div className="bg-secondary font-medium text-lg py-4 px-10 m-5 rounded-xl">As per RBI guidelines, activate your card within 1 st 30 days to avoid card closure.</div>
                <main className="h-screen ">
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                        <div className="w-60"><img src={Swiggy} className="h-7 ml-2"></img></div>
                        <span className=''>Swiggy eVoucher Worth <span className='font-semibold'>₹200</span></span>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Zepto} className="h-7 ml-2"></img></div>
                        <sapn className=''>3 Month Subscription Worth <span className='font-semibold'>₹599</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Youtube} className="h-7 ml-2"></img></div>
                        <sapn className=''>2 Month Subscription Worth <span className='font-semibold'>₹599</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Audible} className="h-7 ml-2"></img></div>
                        <sapn className=''>2 Month Subscription Worth <span className='font-semibold'>₹303</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={Netmeds} className="h-7 ml-2"></img></div>
                        <sapn className=''>6 Free Deliveries Worth <span className='font-semibold'>₹999</span></sapn>
                    </div>
                    <div className="p-4 m-4 flex flex-row border border-gray-400 rounded-xl shadow-md">
                    <div className="w-60"><img src={flig} className="h-9 ml-3"></img></div>
                        <sapn className='mt-1.5'>Zero convenience Fee Flight Booking Worth <span className='font-semibold'>₹900</span></sapn>
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
                    <div className="py-20"></div>
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
                    onClick={handlePay}
                    className="bg-primary m-auto"
                >
                    <span className="text-white font-semibold mx-4">I have my PIN. Proceed to Pay</span>
                </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}
export default Home