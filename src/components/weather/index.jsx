import { useEffect, useState } from "react";
import Search from "../search";


export default function Weather() {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function FetchweatherData(param) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=9c93d0e924ddc00810335b11cf24b7bc`)
            const data = await response.json();
            console.log(data)
            if (data) {
                setWeatherData(data);
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
            console.log(e)

        }
    }

    useEffect(() => {
        FetchweatherData("Hyderabad")
    })

    async function handleSearch() {
        FetchweatherData(search)

    }
    console.log(weatherData)
    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading?<div> loading....</div>
                :<div ></div>
            }

        </div>
    )
}