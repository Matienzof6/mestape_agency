function LogoCloud(){
    return(
        <div className="relative bg-gray-50 pt-40 px-4 pb-36 sm:px-6 lg:px-8 lg:pb-28">
            <div className="text-left">
                <h2 className="text-5xl font-semibold tracking-tight text-gray-800 pb-12 pl-12">Work with top notch companies</h2>        
            </div>
            <div className="mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Transistor"
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoCloud