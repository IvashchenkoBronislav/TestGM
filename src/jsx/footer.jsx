import React from "react";
import "../scss/footer.scss"
import Opensea from "../img/footer/opensea.svg"
import Discord from "../img/footer/discord.svg"
// import Facebook from "../img/footer/facebook.svg"
import link from "../img/footer/linkidin.svg"
import Twitter from "../img/footer/twitter.svg"
import logoF from "../img/footer/logo_full.svg"
import { ButtonLocation, ButtonNav } from "./button";

export function Footer(){
    return(
        <div className="footer">
            <div className="footer_bg"></div>
            <div className="footer_case footer-case">
                <nav className="footer-case_nav">
                    <ButtonNav id="about-us">About us</ButtonNav>
                    <ButtonNav id="roadmap">Roadmap</ButtonNav>
                    <ButtonNav id="road">Join the club</ButtonNav>
                    <ButtonNav id="our-team">Team</ButtonNav>
                    <ButtonNav id="faq">FAQ</ButtonNav>
                </nav>
                <div className="footer-case_center">
                    <img  className="footer-logo" src={logoF} alt="" />
                    <div className="soсial-case">
                        <a href="#" target="_blank" rel="noreferrer"><img src={Opensea} alt="" /></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={Discord} alt="" /></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={link} alt="" /></a>
                        {/* <a href="" target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a> */}
                        <a href="#" target="_blank" rel="noreferrer"><img src={Twitter} alt="" /></a>
                    </div>
                    <div className="footer_reserved">
                        <span>©2022 Bee Ukrainian. all rights reserved</span>
                    </div>
                </div>

                <ButtonLocation href="#" className="yellow">Join the club</ButtonLocation>
            </div>

        </div>
    )
}

