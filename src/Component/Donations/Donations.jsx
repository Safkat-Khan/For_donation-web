

const Donations = ({card}) => {
    const { img, title, category, price, card_bg_color, text_button_bg_color } = card;
    return (
        <div>
                <div style={{backgroundColor:card_bg_color}} className="shadow-lg flex rounded-lg lg:flex-row w-[650px] h-[230px] mt-7">
                    <img className="h-[230px]  w-[300px] object-cover rounded-lg" src={img} alt="Shoes" />
                    <div className="p-4">
                        <div className="card-actions justify-start">
                            <button style={{color:text_button_bg_color, backgroundColor:card_bg_color}} className="border rounded w-24 h-8 mt-3">{category}</button>
                        </div>
                        <h2 className="card-title mt-2 font-bold">{title}</h2>
                        <h1 style={{color:text_button_bg_color}} className="mt-2 font-bold">{price}</h1>
                        <button style={{backgroundColor:text_button_bg_color}} className="border rounded w-28 h-12 text-white font-bold mt-4">View Details</button>
                    </div>
                </div>
        </div>
    );
};

export default Donations;