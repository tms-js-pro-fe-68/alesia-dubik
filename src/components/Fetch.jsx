import React, {useState, useEffect} from "react"

function myHook(https){
    const [fetchData, setFetchData] = useState([])
    const [error, setError] = useState("")
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
            setFetchData(data)
        })
        .catch((errors) => setError(errors.message))
        .finally(() => {
            setLoading(false)
        });
    }, [change]);

    return {fetchData, error, loading, setChange, change}
}

export default function Fetch(){

    const {fetchData: news, error: errorMessage, loading, setChange, change} = myHook("https://www.boredapi.com/api/activity/");

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

