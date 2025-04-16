import React, { useEffect, useState } from "react";
import "../scss/content.scss"
import { ButtonLocation } from "./button";

const lengthArr ={
    "en":{
        'info':"Raised funds will be used to help ukrainian children affected by the war in Ukraine",
        'button':'Join ON TWITTER',
        'button0':'Join ON Discord'

    },
    "ua":{
        'info':"Купуючи наші nft, ви допомагаєте дітям, які постраждали від російської агресії.",
        'button':'Приєднуйся до TWITTER',
        'button0':'Приєднуйся до Discord'
    }
}

function resize(set){
    if(window.innerWidth >=960){
        set(false)
    }else{
        set(true)
    }
}

export function Content(){
    const [leng, setLeng] = useState("ua")
    const [width, setWidth] = useState(false)
    useEffect(()=>{
        resize(setWidth)

        window.onresize = ()=>{
            resize(setWidth)
        }
        const LengButtun = Array.prototype.slice.call(document.querySelectorAll(".button-leng"))
        LengButtun.forEach((el)=>{
            el.addEventListener("click",(el)=>{
                setLeng(el.target.id)
            })
        })
    },[])

    return(
        <div className="content">
            <div className="content_text text-content">
                <span className="text-content_title">10 000 NFTs</span>
                <span className="text-content_subtitle">Bee Ukrainian Collection</span>
                <span className="text-content_info">{lengthArr[leng]["info"]}</span>
                <ButtonLocation href="#">{lengthArr[leng]['button']}</ButtonLocation>
                {width? <ButtonLocation href="#">{lengthArr[leng]['button0']}</ButtonLocation>: ""}
            </div>
        </div>
    )
}

