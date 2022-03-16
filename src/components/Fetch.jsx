import React, {useState, useEffect} from "react"


export default function Fetch(){
    const [isLoading, setIsLoading] = useState(true)
    const [news, setNews] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    
    useEffect(() => {
        setIsLoading(true)
        fetch("http://www.boredapi.com/api/activity/")
        .then((response) => {
            if(response.status !== 200){
                throw Error(response.statusText)
            }
            return response.json()})
        .then((data) => {
            setNews(data)
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="music-group">
            <div>{isLoading && "Loading..."}</div>
            <div>{errorMessage}</div>
            <div className="group-name">{news.activity}</div>
        </div>
    )
}

