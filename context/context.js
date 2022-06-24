import { createContext, useState } from "react";

export const SiteContext = createContext()

export const SiteContextProvider = (props)=>{
    const [Counter, setCounter] = useState(0)

    function increase(){setCounter(Counter + 1)}
    function decrease(){setCounter(Counter - 1)}

    const value = {Counter, increase, decrease}
    return (
        <SiteContext.Provider value={value}>
            {props.children}
        </SiteContext.Provider>
    )
}

