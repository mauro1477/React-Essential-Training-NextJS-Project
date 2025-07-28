const getData = async () => {
    const res = await fetch("https://snowtooth-hotel-api.fly.dev");
    return res.json();
};

const HotelBlock = ( { name, capacity } ) => {
    return (
        <div>
            <h1>{ name }</h1>
            <p>{ capacity }</p>
        </div>
    );
}

export default async function Page(){
    const data = await getData();
    return(
        <main>
            <div className="flex min-h-screen flex-col p-24">
                <h1>Hotels details</h1>
                { data.map((hotel) => (
                    <HotelBlock key={ hotel.id } name={ hotel.name } capacity={ hotel.capacity} />
                ))}
            </div>
        </main>
    );
}