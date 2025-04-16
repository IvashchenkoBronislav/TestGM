import React, { useEffect, useState } from "react";
import "../scss/modail.scss"

import Arrow from "../img/modail/arow.svg"
import Token from "../img/modail/Vector.png"
import Flower from "../img/modail/flower_1.png"

const importAll = (r) => r.keys().map(r);
const allFrames = importAll(require.context('../img/modail/bee', false, /\.png$/))
  .sort((a, b) => {
    const numA = parseInt(a.match(/frame\((\d+)\)/)[1], 10);
    const numB = parseInt(b.match(/frame\((\d+)\)/)[1], 10);
    return numA - numB;
  });

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
    const [rowTop, setRowTop] = useState(generateRandomRow(18)); 
    const [rowBottom, setRowBottom] = useState(generateRandomRow(18));
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