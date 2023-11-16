import swal from 'sweetalert';

const CardItems = ({ card }) => {
    const { id, img, price, title, description } = card;



    const handleAddDonation = () => {
        // const addededDonationArray = [];

        const cardAddDonation = JSON.parse(localStorage.getItem('donation')) || [];

        const isExists = cardAddDonation.find(card => card.id === id);


        if (!isExists) {
            cardAddDonation.push(card);
            localStorage.setItem("donation", JSON.stringify(cardAddDonation));
            swal("Good job!", "Clicked Donation Successfuly!", "success");
        }
        else {
            swal("error", "Donation Duplicate No Data", "error");
        }


    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl relative mb-10">
                <img className="lg:w-[1400px] lg:h-[700px] rounded-lg md:w-[300px] md:h-[150px] object-cover" src={img} alt="" />
                <div>
                    <div className=" absolute top-[587px] justify-start bg-[rgba(0,0,0,0.5)] w-[1350px]  h-28 p-8">
                        <button onClick={handleAddDonation} className="bg-[#FF444A]  lg:w-32 text-white font-bold  p-4 w-24 rounded absolute ">{price}</button>
                    </div>
                </div>
                <div className='p-2'>
                    <h1 className="text-3xl font-bold mt-2">{title}</h1>
                    <h1 className="mt-3 text-gray-600">{description}</h1>
                </div>
            </div>
        </div>
    );
};

export default CardItems;