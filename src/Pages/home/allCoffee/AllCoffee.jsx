import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const AllCoffee = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div className="bg-[#ECFFEB] py-8  ">
            <h2 className="text-3xl font-bold font-serif text-center mt-4">All Coffees is Here and Total Coffee is:{coffees.length}</h2>

            <div className="grid md:grid-cols-2  gap-4 px-4 py-4">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}


                    ></CoffeeCard>)
                }
            </div>

            <div className="text-center my-4 font-serif font-bold">
                <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>

                    <Link className="relative transition-colors duration-300 delay-200 group-hover:text-white ease" to='/addCoffee'>Add Coffee</Link>
                </a>
            </div>
        </div>
    );
};

export default AllCoffee;