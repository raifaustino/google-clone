import { useState, useEffect } from 'react';

const API_KEY = "AIzaSyAGwCeZ7UT37n3i7-KDXciZaaRD39zQd64";

const CONTEXT_KEY = "76449be3b7006e8ce";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();
    }, [term])

    return { data }
}

export default useGoogleSearch