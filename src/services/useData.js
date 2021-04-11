import {useState, useEffect }from 'react'


export default function useData() {
    const [data, setData] = useState(null)
    const url= 'https://jsonplaceholder.typicode.com/users/';

    useEffect(() => {
        async function init() {
            const response = await fetch(url);
            if(response.ok){
                const json = await response.json()
                setData(json);
            } else {
                throw response;
            }
        }
        init();
    }, [url])

    return {data}
}
