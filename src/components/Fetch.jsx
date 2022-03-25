import React, {useState, useEffect} from "react"

function myHook(https){
    const [news, setNews] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [change, setChange] = useState(false)
    
    useEffect(() => {
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
        });
    }, [change]);

    return {errorMessage, setChange, change, news}
}

export default function Fetch(){

    const {errorMessage, setChange, change, news} = myHook("https://www.boredapi.com/api/activity/");

    return (
        <div className="advice-container">
            <div className="music-group">
                <div>{errorMessage}</div>
                <div className="group-name">{news.activity}</div>
            </div>
            <div role="button" tabIndex={0} className="advice-button" onClick={() => change ? setChange(false) : setChange(true) }>another advice</div>
        </div>
    )
}

