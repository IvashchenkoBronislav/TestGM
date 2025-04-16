import React, { useEffect, useState } from "react";
import "../scss/modail.scss"

import Arrow from "../img/modail/arow.svg"
import Token from "../img/modail/Vector.png"
import Flower from "../img/modail/flower_1.png"
import b1 from "../img/modail/bee/frame(1).png"
import b2 from "../img/modail/bee/frame(2).png"
import b3 from "../img/modail/bee/frame(3).png"
import b4 from "../img/modail/bee/frame(4).png"
import b5 from "../img/modail/bee/frame(5).png"
import b6 from "../img/modail/bee/frame(6).png"
import b7 from "../img/modail/bee/frame(7).png"
import b8 from "../img/modail/bee/frame(8).png"
import b9 from "../img/modail/bee/frame(9).png"
import b10 from "../img/modail/bee/frame(10).png"
import b11 from "../img/modail/bee/frame(11).png"
import b12 from "../img/modail/bee/frame(12).png"
import b13 from "../img/modail/bee/frame(13).png"
import b14 from "../img/modail/bee/frame(14).png"
import b15 from "../img/modail/bee/frame(15).png"
import b16 from "../img/modail/bee/frame(16).png"
import b17 from "../img/modail/bee/frame(17).png"


const allFrames = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17];

const getRandomFrame = () => {
    const randIndex = Math.floor(Math.random() * allFrames.length);
    return allFrames[randIndex];
  };
  

  const generateRandomRow = (length) => {
    return Array.from({ length }, () => getRandomFrame());
  };
  

  const getRandomIndexCount = () => {
    return Math.floor(Math.random() * 3) + 1; 
  };
export function BorderBee() {
    const [rowTop, setRowTop] = useState(generateRandomRow(17)); 
    const [rowBottom, setRowBottom] = useState(generateRandomRow(17));
    const [fadingIndexesTop, setFadingIndexesTop] = useState([]); 
    const [fadingIndexesBottom, setFadingIndexesBottom] = useState([]); 
  
    // Функція для заміни картинок з анімацією затухання для верхнього рядка
    const fadeAndSwapTop = (row, setRow, indexes) => {
      setFadingIndexesTop((prev) => [...prev, ...indexes]);
  
      setTimeout(() => {
        setRow((prev) => {
          const updated = [...prev];
          indexes.forEach((index) => {
            let newFrame;
            do {
              newFrame = getRandomFrame();
            } while (newFrame === updated[index]);
            updated[index] = newFrame;
          });
          return updated;
        });
  
        setTimeout(() => {
          setFadingIndexesTop((prev) => prev.filter((i) => !indexes.includes(i)));
        }, 300);
      }, 300);
    };
  
    const fadeAndSwapBottom = (row, setRow, indexes) => {
      setFadingIndexesBottom((prev) => [...prev, ...indexes]);
  
      setTimeout(() => {
        setRow((prev) => {
          const updated = [...prev];
          indexes.forEach((index) => {
            let newFrame;
            do {
              newFrame = getRandomFrame();
            } while (newFrame === updated[index]);
            updated[index] = newFrame;
          });
          return updated;
        });
  
        setTimeout(() => {
          setFadingIndexesBottom((prev) => prev.filter((i) => !indexes.includes(i)));
        }, 300);
      }, 300);
    };
  
    useEffect(() => {
      const intervalTop = setInterval(() => {
        const randCountTop = getRandomIndexCount(); 
        const randIndexesTop = [];
        while (randIndexesTop.length < randCountTop) {
          const randIndex = Math.floor(Math.random() * 10);
          if (!randIndexesTop.includes(randIndex)) {
            randIndexesTop.push(randIndex);
          }
        }
        fadeAndSwapTop(rowTop, setRowTop, randIndexesTop);
      }, 1000);
  
      const intervalBottom = setInterval(() => {
        const randCountBottom = getRandomIndexCount(); 
        const randIndexesBottom = [];
        while (randIndexesBottom.length < randCountBottom) {
          const randIndex = Math.floor(Math.random() * 10);
          if (!randIndexesBottom.includes(randIndex)) {
            randIndexesBottom.push(randIndex);
          }
        }
        fadeAndSwapBottom(rowBottom, setRowBottom, randIndexesBottom);
      }, 1000);
  
      return () => {
        clearInterval(intervalTop);
        clearInterval(intervalBottom);
      };
    }, [rowTop, rowBottom]);
  
    return (
      <div className="bee-line">
        <div className="bee-line-row-top">
          {rowTop.map((src, idx) => (
            <img
              key={`top-${idx}`}
              src={src}
              alt=""
              className={`bee-img ${fadingIndexesTop.includes(idx) ? "fade" : ""}`}
            />
          ))}
        </div>
        <div className="bee-line-row-bot">
          {rowBottom.map((src, idx) => (
            <img
              key={`bottom-${idx}`}
              src={src}
              alt=""
              className={`bee-img ${fadingIndexesBottom.includes(idx) ? "fade" : ""}`}
            />
          ))}
        </div>
      </div>
    );
  }

export function FlowerToken(prop){
    return(
        <div className="flower-token">
            <img src={Flower} alt="" key={Flower}/>
            <span className="flower-token_title">{prop.children[0]}</span>
            <span>{prop.children[1]}</span>
        </div>
    )
}

export function City(prop){
    return(
        <div className="city-token">
            <img className="city-token_img" src={Token} alt="" />
            <span className="city-token_title">{prop.children}</span>
        </div>
    )
}


export function ArrowUp(){
    const [actUp, setActUp] = useState(false)
    const [top, stateTop] = useState(0);
    const [scroll, stateScroll] = useState(0)
    

    useEffect(()=>{

        document.addEventListener("scroll", ()=>{
            
            stateTop(window.pageYOffset)
            stateScroll(window.pageYOffset - top)

            if(top >= 1000){
                if(scroll <= 0){
                    setActUp(false)
                }else if(scroll >= 0){
                    setActUp(true)
                }
            }else if(top <= 1000){
                setActUp(false)
            }
        })        
    })

    function scrollToE(){
        const location = document.querySelector(`header`)
        location.scrollIntoView({behavior:"smooth"})
    }
    return(
        <img src={Arrow} alt="up" className={actUp? "arrow-up": "arrow-up arrow-up_dis"} onClick={()=>{
            scrollToE()
        }}/>
    )
}