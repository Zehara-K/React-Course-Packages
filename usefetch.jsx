import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [courses, setCourses] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data");
                }
                return res.json();
            })
            .then(data => {
                setCourses(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [url]);

    return [courses, setCourses, error];
};

export default useFetch;