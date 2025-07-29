import HotelBlock from "./hotelBlock.js"

const getData = async () => {
    const res = await fetch("https://snowtooth-hotel-api.fly.dev");
    return res.json();
};


export default async function Page(){
    const data = await getData();
    return(
        <main>
            <div className="flex min-h-screen flex-col p-24">
                <h1>Hotels details</h1>
                { data.map((hotel) => (
                    <HotelBlock key={ hotel.id } name={ hotel.name } capacity={ hotel.capacity} id={ hotel.id} />
                ))}
            </div>
        </main>
    );
}