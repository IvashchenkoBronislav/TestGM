export function ButtonNav(prop){
    function scroll(){
        const location = document.querySelector(`.${prop.id}`)
        console.log(location)
        location.scrollIntoView({behavior:"smooth"})
    }

    return(
        <button id={prop.id} className="button-nav" onClick={scroll}>{prop.children}</button>
    )
}

export function ButtonLeng(prop){
    return(
        <button id={prop.id} className="button-leng">{prop.id}</button>
    )
}


export function ButtonLocation(prop){
    return(
        <a href={prop.href} target="_blank" rel="noreferrer" ><button className={`button-location ${prop.className? `${prop.className}`:''}`}>{prop.children}</button></a>
    )
}