
export default function StyleProps({title}){
    return(
        <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", padding: 20, fontSize: 21, fontWeight: 500, borderColor: "white", borderWidth: 3, color: "#1976d2", marginBottom: 20}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <input style={{marginRight: 5, }} type="checkbox" id="stProp" name="stProp" /> 
            <div htmlFor="styleProp">{title}</div>
          </div>
          <button style={{borderColor: "#1976d2",fontSize: "0.875rem", borderWidth: 1, borderRadius: 4, padding: "5px 15px", }} type='submit'>EDIT</button>
        </div>
    )
}