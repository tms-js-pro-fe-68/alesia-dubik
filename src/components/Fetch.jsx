import React, {useState, useEffect} from "react"


export default function Fetch(){
    const [isLoading, setIsLoading] = useState(true)
    const [musicGroup, setMusicGroup] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    
    useEffect(() => {
        setIsLoading(true)
        fetch("http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json")
        .then((response) => {
            if(response.status !== 200){
                throw Error(response.statusText)
            }
            return response.json()})
        .then((data) => {
            setMusicGroup(data)
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }, [])

    return (
        <div className="music-group">
            <div>{isLoading && "Loading..."}</div>
            <div>{errorMessage}</div>
            <div className="group-name">{musicGroup.name}</div>
            <div className="group-age">{musicGroup["life-span"].begin.slice(0, 4)}-{musicGroup["life-span"].end.slice(0, 4)}</div>
            <div className="group-style">{musicGroup.disambiguation}</div>
            <div className="group-place">{musicGroup.area.name}</div>
        </div>
    )
}

