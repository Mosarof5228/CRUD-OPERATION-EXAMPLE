import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { name, quantity, brand, _id, taste, price, country, photoUrl } = coffee;

    // for delete coffee handler
    const handleDeleteCoffee = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log(id)
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            )
                            const remaingCoffees = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaingCoffees);
                            console.log(remaingCoffees)

                        }
                    })

            }
        });

    }

    // for update coffee handler

    const handleUpdateCoffee = (id) => {
        fetch(`http://localhost:5000/coffee/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-2">
                <figure><img src={photoUrl} alt="Album" /></figure>
                <div className=" flex items-center justify-between  w-full px-4 ">
                    <div>
                        <h2 className="card-title">Coffee Name: {name}</h2>
                        <p>Taste: {taste}</p>
                        <p>Country: {country}</p>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Quantity: {_id}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-3">
                            <button className="btn ">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn">Update</button>
                            </Link>
                            <button className="btn" onClick={() => handleDeleteCoffee(_id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CoffeeCard;