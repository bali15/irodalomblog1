function HeaderIcon({Icon}) {
    return(
        <div className="flex items-center cursor-pointer md:px-6 sm:h-14 
        md:hover:bg-gray-400 rounded-xl ">
            <Icon className="h-5 text-center sm:h-7"/>
        </div>
    )
}

export default HeaderIcon;