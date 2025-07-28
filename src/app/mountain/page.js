async function getData(){
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    console.log(res);
    return res.json();
}

export default async function Page(){
    const data = await getData();
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-center p-24">
                <h1>Mountain Info</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Lift Name</th>
                            <th>Status</th>
                            <th>Capacity </th>
                            <th>Night </th>
                            <th>ElevationGain </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((lift)=>(
                            <tr key={lift.id}>
                                <td>{lift.name}</td>
                                <td>{lift.status}</td>
                                <td>{lift.capacity}</td>
                                <td>{lift.night}</td>
                                <td>{lift.elevationGain}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </main>
    );
}
 