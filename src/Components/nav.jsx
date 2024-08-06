import React from "react"
import { NavLink } from "react-router-dom";

import {Button, Avatar} from "@material-tailwind/react";

import logo from '../Assets/Logo.svg'
import avatar from "../Assets/Avtar.svg";
import droupDown from '../Assets/DroupDown.svg'

function Nav (){
    return(
        <nav className="fixed top-0 p-3 bg-primary flex w-screen z-30 md:px-10">
          <div className="">
        <img src={logo} className="mr-auto h-10" ></img></div>

        {/* <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={avatar}
          />
          <div className="flex text-white space-x-2">
            <span>John Doe</span>
            <img src={droupDown}></img>
          </div>
          </Button> */}
          <button className="bg-white  p-2 rounded-xl text-primary font-bold px-6 ml-auto" onClick={()=>{window.open('https://idfcrewards-sg.cheggout.com/')}}>
              More Ways to Save &gt;
            </button>
        </nav>
    )
}
export default Nav