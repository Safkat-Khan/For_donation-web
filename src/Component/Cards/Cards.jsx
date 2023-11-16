import Card from "../Card/Card";

const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div className="mt-10">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16 ">
                {
                    cards?.map(cards => <Card card={cards} key={cards.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;