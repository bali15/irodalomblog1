import  {
    HomeIcon,
    BadgeCheckIcon,
    ArrowNarrowDownIcon,
    ArrowNarrowUpIcon

} from "@heroicons/react/solid";
import {
    SearchIcon
} from "@heroicons/react/outline"

import SZAVAK from "./Main"

import HeaderIcon from "./HeaderIcon";

function Header() {
    

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2">
            


        {/* LEFT */} {/* weboldal képe és neve: "blogolás az élet" */}
                <div className="flex items-center">

                   { <img className="w-20 h-21" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Antigoneleigh.jpg/250px-Antigoneleigh.jpg "/>}

                    <p className="ml-6 font-extralight text-4xl" >ANTIGONÉ</p>
                    
                </div>

        {/* CENTER */} {/* blog neve */}
            <div className="flex justify-center flex-grow " >

            <p className="font-semibold text-3xl" >A KARVEZETŐ</p>

            </div>


        {/* RIGHT */} {/* Időszámítás */}

          <div>
            <h1 className="text-3xl mr-3 font-serif">Időszámításunk előtt 442.</h1>
          </div>
            
        </div>
    )
}

export default Header
