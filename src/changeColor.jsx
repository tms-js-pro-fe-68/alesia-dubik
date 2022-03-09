
export default function changeColor(){
    const elem = document.querySelector("#circle")
   if(elem.className==="green-circle"){
    elem.className="white-circle";
   }else {
    elem.className="green-circle";
   }
}
