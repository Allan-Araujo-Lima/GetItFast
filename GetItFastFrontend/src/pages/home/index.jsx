import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {

    const [presentation, setPresentation] = useState("")

    useEffect(() => {
        axios
            .get("http://localhost:7777/get_data")
            .then((response) => {
                const data = response.data;
                setPresentation(data["body"])
            })
            .catch((e) => {
                console.error(e);
            })
    }, [])

    return (
        <>
            <div>
                <h1>Oiii, {presentation}</h1>
            </div>
        </>
    )
}