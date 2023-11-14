import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, brand, _id, taste, price, country, photoUrl } = coffee;

    const updateCoffeeHandle = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const brand = form.brand.value;
        const taste = form.taste.value;
        const country = form.country.value;
        const photoUrl = form.photo.value;
        const price = form.price.value;
        const coffee = { name, quantity, brand, taste, price, country, photoUrl, _id }
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee UpdatedSuccessfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div className="px-4 text-[#000000] bg-[#ECFFEB] py-4">
            <h2 className="text-center font-bold text-4xl font-serif py-4">Update Coffee</h2>
            <form onSubmit={updateCoffeeHandle} className="md:px-16 text-center "  >
                <div className="md:flex  gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Coffee Brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Coffee Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" defaultValue={country} placeholder="Made country" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="flex gap-4 items-center justify-center">
                    <div className="pt-4">
                        <a href="#_" className="relative  inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#000000]"></span>
                            {/* <span className="relative">Button Text</span> */}
                            <input type="submit" className="relative font-serif font-bold" value="Update Coffee" />
                        </a>
                    </div>
                    <div className="pt-4">
                        <a href="#_" className="relative  inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#000000]"></span>
                            {/* <span className="relative">Button Text</span> */}
                            <Link className="relative transition-colors duration-300 delay-200 group-hover:text-white ease" to='/'>show All Coffee</Link>
                        </a>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;