import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data from that resource');
                }
                else {
                    return res.json();
                }
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error }
}

export default useFetch;