import Image from "next/image"

function Main({posts}) {

    return (
        <div className="p-5 h-screen bg-gradient-to-b from-white via-yellow-400 to-yellow-600 ">
            <div className="flex p-2 mt-5"> {/* 1.PICTURE */}
                <h1 className=" text-4xl max-w-8xl ">Az én történetem ott kezdődött, hogy megkaptam a karvezető állást Thébain.
                    Az álmom vált valóra de még a munkám történetének elejébe bele se vágtam, már galibába keveredett e szegény város .
                    Királyom Kreón, kinek a fia Haimón volt. Ő Antigoné férje. Neki volt egy testvére Iszméné. 
                    Ott kezdődött a történet, hogy Kreón parancsára Antigoné és Iszméné halott bátyját, Polüneikészt
                    nem temethetik el tisztességben. A fiatal harcos bűne az volt, hogy a városra támadt. Antigoné Iszméné segítségét kéri,
                    aki ugyan egyetért abban, hogy a halottaknak meg kell adni a végtisztességet, de nem mer ellenszegülni Kreónnak.
                    Antigoné megharagszik Iszménére és egyedül készül végrehajtani tervét. Itt jövök én a képbe. 
                    Az elbeszélésben, mint karvezető, értesítettem őket, hogy Polüneikész és Eteoklész párbajban megölték egymást.
                    Senkinek sem tetszik az, hogy Kreón megtiltotta, hogy eltemessék Polüdeikészt, de mégsem mernek ellent mondani a királynak.
                    A galibát azt hozza,
                    
            
                        </h1>
                <Image  src="/images/1pic.png" className="border-4 border-white" width={3200} height={320} layout="fixed"/>

                     
            </div>

            <div className="flex p-2 "> {/* 2.PICTURE */}

                <Image className="" src="/images/2pic.png"   width={3150} height={320} layout="fixed"/>

                <h1 className=" text-4xl max-w-8xl ml-5 "> 
                hogy egy őr megtalálja a testet porral beszorva, és ezt elmondja Kreónnak. A királynak elege lesz és 
                a vének tanácsa is figyelmezteti őt, hogy halandó nem szegülhet ellen az istenek törvényének,
                de elvakította Kreónt a bosszú. Nagyon félti a hatalmát ahhoz, hogy saját szavát megmásítsa.
                Elengedi az őrt, hogy megkeresse a tettest. Hamarosan el is kapják Antigónét, aki büszkén vállalja tettét.
                A király azt sejti, hogy Iszméné is segített neki, ezért őt is meg akarja büntetni. 
                Antigóné nem ismeri el Kreónt királynak és mondta, hogy istenek törvényei felülírják az embereiket. 
                A két nővért börtönbe záratja a király, pedog Antigóné Kreón fiának, Haimónnak a menyasszonya.
                Én vészjosló dolgokról jövendölök. Mikor Haimón minderről értesül, észérvekkel próbálja meggyőzni apját,
                de ő nem vonja vissza szavát, mert ez rossz fényben tüntetné fel, mint uralkodó. A nép Antigóné pártját fogja.
                Kreón elrendeli, hogy éppen csak annyi ételt kapjon Antigóné, ami elég az életbenmaradáshoz.
                
                 </h1>

            </div>

            <div className="flex p-2"> {/* 3. PICTURE */}

                <h1 className="text-4xl max-w-8xl">
                Iszménét pedig a tanácsomra szabadon engedem. Theiresziász, a vak jövendőmondó szintén figyelmezteti a királyt,
                hogy ez az utolsó lehetősége, hogy helyrehozza eddigi hibáit. Kreón itt is politikai összeesküvést sejt,
                és nem ismeri be tévedését.  A jós erre közli, hogy Polüneikész halála miatt 
                egy napon belül egy újabb thébai férfi fog meghalni és ez nagy szerencsétlenséget hoz majd Kreón fejére.
                Erre már észbe kap és próbálja rendbehozni, amit elrontott, de késő. A jövendőmondó hamarosan azzal a hírrel érkezik,
                hogy a fia, Haimón öngyilkos lett. Haimón anyja kérdőre vonja férjét, hogy történhetett ez meg.
                Kreón eltemeti Polüneikész holttestét, majd igyekeznek egyik szolgájával, hogy kiszabadítsák Antigonét.
                Pont akkor érkeznek, amikor Antigoné holtan esi össze, és Haimón leszúrja magát egy tőrrel. 
                Szemében harag és düh volt, nem bocsájtott meg apjának. Fia holttestét hozva tudja meg a hírt,
                hogy felesége is öngyilkos lett. Kreon tehát megtarthatta féltett királyságát, de mindenkit elveszített.



                </h1>

                <Image className="" src="/images/3pic.png"   width={3200} height={320} layout="fixed"/>


            </div>


             <div className="mt-10"> {/* Copyright... */}

                <h1 className="flex justify-center ">
                Copyright ©
                </h1>
                <h1 className="flex justify-center ">
                Ez az oldal legutoljára Időszámításunk előtt 440-ben volt szerkesztve.</h1>
                <h1></h1>

             </div>

               
        </div>
    )
}

export default Main;



