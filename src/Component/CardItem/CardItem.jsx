import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardItems from "../CardItems/CardItems";





const CardItem = () => {
    const [card, setCards] = useState({})

    const { id } = useParams()
    // console.log(id);
    const cards = useLoaderData()
    // console.log(cards);


    useEffect(() => {
        // console.log('id, cards');
        const findCard = cards?.find(card => card.id == id)
        console.log(findCard);
        setCards(findCard);
    }, [id, cards]);


    return (
        <div>
            <CardItems card={card}></CardItems>
        </div>
    );
};

export default CardItem;