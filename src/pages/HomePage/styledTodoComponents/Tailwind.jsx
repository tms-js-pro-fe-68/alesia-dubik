
export default function Tailwind({title}){
    return(
        <div className="flex justify-between items-center p-5 text-xl font-medium border-white border-2 decoration-blue-200 ">
          <div className="flex items-center">
            <input className="mr-1" type="checkbox" id="tailwind" name="tailwind" />
            <div htmlFor="tailwind">{title}</div>
          </div>
          <button className="border-white border-2 rounded-xl py-1 px-4 decoration-blue-200" type='submit'>EDIT</button>
        </div>
    )
}