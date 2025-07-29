"use client";
import Image from "next/image";

const HotelBlock = ( { id, name, capacity } ) => {

    const imageLoader = ({ src }) =>{
        return `./hotels/${src}.jpeg`
    }

    return (
        <div>
            <h1>{ name }</h1>
            <p>{ capacity }</p>
            <Image src={id} width={500} height={300} loader={imageLoader} alt="hotel picture" priority={true}></Image>
        </div>
    );
}

export default HotelBlock;
