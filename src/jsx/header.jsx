import React, { useEffect, useState } from "react";
import "../scss/header.scss"
import logo from "../img/header/logo_full.svg"
import { ButtonLeng, ButtonLocation, ButtonNav } from "./button";
import { Content } from "./content";

const lengArr = {
    "en":{
        'button':"Join on Discord",

    },
    "ua":{
        'button':"Приєднатися до Discord",
    }
}


export function MiniHeader(){
    const [act,setAct] = useState(false)

    return(
        <div className="mini-header">
            <img className="mini-header_logo" src={logo} alt="logo" />
            <nav className={!act? "mini-header_nav":"mini-header_nav mini-header_nav__act"} onClick={()=>{setAct(!act)}}>
                <ButtonNav id="about-us_title">About us</ButtonNav>
                <ButtonNav id="roadmap_title">Roadmap</ButtonNav>
                <ButtonNav id="road">Join the club</ButtonNav>
                <ButtonNav id="our-team_title">Team</ButtonNav>
                <ButtonNav id="faq">FAQ</ButtonNav>
                <div className="header_leng">
                    <ButtonLeng id="ua"/>
                    <ButtonLeng id="en"/>
                </div>
            </nav>
            <div className="mini-header_burger burger" onClick={()=>{setAct(!act); console.log(act)}}>
                <div className={!act? "burger_top": "burger_top burger_top__act"}></div>
                <div className={!act? "burger_midle": "burger_midle burger_midle__act"}></div>
                <div className={!act? "burger_bottom": "burger_bottom burger_bottom_act"}></div>
            </div>
        </div>
    )
}

export function Header(){
    const [leng, setLeng] = useState("ua")
    useEffect(()=>{
        
        const LengButtun = Array.prototype.slice.call(document.querySelectorAll(".button-leng"))
        LengButtun.forEach((el)=>{
            el.addEventListener("click",(el)=>{
                setLeng(el.target.id)
            })
        })
    })

    return (
        <header>
            <div className="header_back-ground">
                <img src='' alt="" />
            </div>
            <MiniHeader></MiniHeader>
            <div className="header">
            
                <img className="header_logo" src={logo} alt="log" />
                <div className="header_nav">
                    <ButtonNav id="about-us_title">About us</ButtonNav>
                    <ButtonNav id="roadmap_title">Roadmap</ButtonNav>
                    <ButtonNav id="road">Join the club</ButtonNav>
                    <ButtonNav id="our-team_title">Team</ButtonNav>
                    <ButtonNav id="faq">FAQ</ButtonNav>
                    <div className="header_leng">
                        <ButtonLeng id="ua"/>
                        <ButtonLeng id="en"/>
                    </div>
                </div>
                <ButtonLocation href="https://discord.gg/zRMSv3cAJR">{`${lengArr[leng]['button']}`}</ButtonLocation>
            </div>
           <Content></Content>
        </header>
    )
}


