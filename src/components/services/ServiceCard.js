import { Link } from "react-router-dom"



function ServiceCard({data, index}){
    return(
        <div 
        onMouseEnter={()=>{
            const title_element = document.getElementById(`learn`+index)
            title_element.classList.add("text-blue-500")
            title_element.classList.remove("text-gray-900")
            
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(`learn`+index)
            title_element.classList.remove("text-blue-500")
            title_element.classList.add("text-gray-900")
            
        }}
        className="w-full relative p-8 h-96 lg:h-[160pm] bg-white shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full ">
                <img src={data.img} alt="CodeImage" className="w-10 h-10"/>
                <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.description}</p>
                <div className="absolute bottom-0 left-0 p-8">
                    <Link to={data.href} id={`learn`+index}className="items-end text-xl text-gray-900 font-semibold pt-8">Learn More</Link>
                </div>
            </div>
        </div>
    )
}



export default ServiceCard