import React, {useState, useEffect} from "react"

function myHook(https){
    const [news, setNews] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [change, setChange] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch(https)
        .then((response) => {
            if(response.status !== 200){
                throw Error(response.statusText)
            }
            return response.json()})
        .then((data) => {
            setNews(data)
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => {
            setLoading(false)
        });
    }, [change]);

    return {errorMessage, setChange, change, news, loading}
}

export default function Fetch(){

    const {errorMessage, setChange, change, news, loading} = myHook("https://www.boredapi.com/api/activity/");

    return (
        <div className="advice-container">
            <div className="music-group">
            {!!errorMessage && !news.activity ? <div>{errorMessage}</div> : ""}
                {loading && !news.activity ? <div className="group-name">Loading...</div> : ""}
                <div className="group-name">{news.activity}</div>
            </div>
            <div role="button" tabIndex={0} className="advice-button" onClick={() => change ? setChange(false) : setChange(true) }>another advice</div>
        </div>
    )
}

