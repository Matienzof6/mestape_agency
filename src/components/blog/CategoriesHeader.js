import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {useState} from 'react'

function CategoriesHeader({categories}){

    const loc = useLocation()
    const navigate = useNavigate()

    // SEARCH
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/s/" + term), 0.2);
        setTerm("");
        
        
    };

    
    return(
        <div className="w-full bg-gray-100 py-5">
            <div className="grid grid-cols-12">
                <div className="col-span-9">

                    <div className="space-x-8 px-6">
                    <div className="relative">
                            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                                <ul className="mx-4 inline-flex space-x-6 md:mx-6">
                                    <Link to='/blog'
                                    className={`${loc.pathname === '/blog' ? "text-[#0073ec] bg-white":"text-gray-900 hover:text-[#0073ec] border border-gray-100 hover:border-gray-200"} py-2 px-6 rounded-md text-lg font-regular`}>
                                        All
                                    </Link>
                                    {
                                        categories&&categories.map((category,index)=>(
                                            <Link
                                                to={`/category/${category.slug}`}
                                                className={`${
                                                    loc.pathname === `/category/${category.slug}`
                                                    ? "text-[#0073ec] bg-white"
                                                    : "text-gray-900 border border-gray-100 hover:border-gray-200"
                                                } py-1 px-3 md:py-2 md:px-6 rounded-md text-base md:text-lg font-regular overflow-hidden whitespace-nowrap max-w-xs md:max-w-none`}
                                                >
                                                {category.name}
                                                
                                            </Link>
                                        ))
                                    }
                                </ul>
                        </div>
                    </div>
                        
                    </div>
                </div>
                <form onSubmit={(e) => onSubmit(e)} className="relative col-span-3 md:mr-8">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i className='bx bx-search-alt text-xl text-gray-800 '></i>
                    </div>
                    <input
                        id='search'
                        name='search'
                        value={term}
                        onChange={(e)=>handleChange(e)}
                        type='search'
                        className={`
                            py-2.5 pl-10 pr-3 
                            block w-full rounded-full
                            border border-gray-200
                            focus:border-gray-200 focus:ring-gray-200
                            focus:outline-none focus:ring-1
                            placeholder-gray-600 focus:placeholder-gray-500
                        `}
                    />
                </form>
            </div>
        </div>
    )
}
export default CategoriesHeader