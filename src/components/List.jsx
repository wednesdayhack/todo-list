import { Button } from "antd"

const List=({id,title,removeItem,editItem,completeItem})=>{
    return(
        <div className="flex items-center justify-between">
            <p className="w-50">{title}</p>
            <div className="">
                <Button className="m-1 w-12 rounded-xl p-1 bg-yellow-400 font-bold" onClick={()=>editItem(id)}>แก้ไข</Button>
                <Button className="m-1 w-12 rounded-xl p-1 bg-red-600 font-bold" onClick={()=>removeItem(id)}>ลบ</Button>
                <Button className="m-1 2-12 rounded-xl p-1 bg-green-400 font-bold" onClick={()=>completeItem(id)}>สำเร็จ</Button>
                
            </div>
        </div>
    )
}

export default List