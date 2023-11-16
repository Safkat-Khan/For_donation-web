import { useEffect, useState } from "react";
import Donations from "../Donations/Donations";



const Donation = () => {
    const [donationDetails, setdonationDetails] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);

    useEffect(() => {
        const cardAddDonation = JSON.parse(localStorage.getItem('donation'))

        if (cardAddDonation) {
            setdonationDetails(cardAddDonation);
        }
        else {
            console.log('Data No Found');
            setNoFound("Data Not Found!");
        }
        console.log(isShowMore);

    }, [])

    console.log(donationDetails);

    const handleRemove = () => {
        localStorage.clear();
        setdonationDetails([]);
        setNoFound("Data Not Found!");
    }
    return (
        <div>
            {noFound ? <p className="h-[700px] flex justify-center items-center">{noFound}</p>
                :
                <div className="mt-4">
                    {donationDetails.length > 0 && <button onClick={handleRemove} className="bg-gradient-to-r from-cyan-300 to-blue-400 p-3 rounded-lg bg-slate-200 block mx-auto">Deleted All Donation</button>}
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
                        {isShowMore ? donationDetails.map(card => <Donations key={card.id} card={card}></Donations>) : donationDetails.slice(0, 4).map(card => <Donations key={card.id} card={card}></Donations>)}
                    </div>
                    <button onClick={() => setIsShowMore(!isShowMore)} className="px-5 p-3 mt-10 w-40 rounded-lg  bg-gradient-to-r from-violet-300 to-fuchsia-400 block mx-auto">See All</button>
                </div>}
        </div>
    );
};

export default Donation;





