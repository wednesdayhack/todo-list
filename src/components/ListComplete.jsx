const ListComplete=({id,title,undoItem})=>{
    return(
        <div className="flex items-center justify-between">
            <p>{title}</p>
            <div className="">               
            <button className="m-1 rounded-xl p-1 bg-orange-500 font-bold" onClick={()=>undoItem(id)}>Undo</button>
            </div>
        </div>
    )
}

export default ListComplete