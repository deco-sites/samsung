import { useMemo } from "preact/hooks"

import Searchbar, {
    Props as SearchbarProps,
  } from "$components/search/Searchbar.tsx";


export default function Heading(){

    const headingText = useMemo(() => {
        const url = window.location
        const urlSearchParams = new URLSearchParams(window.location?.search);

        let headingText

        if(window.location?.href.includes("search")){
            headingText = urlSearchParams.get("q") ?? ""
        }else{
            const url = window.location?.href
            headingText = url?.slice(url.lastIndexOf("/") + 1)
            console.log("headingText")
        }
        
        return headingText;
    },[])

    return(
        <Searchbar query={headingText} />
    )
}