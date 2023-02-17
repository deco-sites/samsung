import Icon from "$components/ui/Icon.tsx";

import Searchbar, {
    Props as SearchbarProps,
  } from "$components/search/Searchbar.tsx";
  import { useState } from "preact/hooks";

export default function NewSearch(){

    const [showSearch, setShowSearch] = useState(false)
    
    return(
        <>
            <div 
            class="h-12 w-12 flex justify-center items-center cursor-pointer"
            onClick={() => {setShowSearch(true)}}
            >
                <Icon id="MagnifyingGlass" className="w-6 h-6" />
            </div>
            {
            <div class={`${showSearch ? "block" : "hidden"} flex flex-col justify-items-start pt-[20px] md:justify-center items-center w-[100vw] h-[100vh] bg-white md:bg-[rgba(0,0,0,.9)] fixed top-0 left-0 z-50`}>
                <button 
                class="absolute left-[20px] md:left-auto md:top-[20px] md:right-[30px]"
                onClick={() => {setShowSearch(false)}}
                >
                <svg class="w-[31px] fillblack md:fillwhite" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 96 96" focusable="false"><path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path></svg>
                </button>
                <p class="font-bold text-[38px] text-white hidden md:block">Podemos te ajudar?</p>
                <Searchbar placeholder="Galaxy" />
            </div>
            }
        </>
    )
}