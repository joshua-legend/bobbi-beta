import {IProduce} from "../../../../../../util/interfaces/table";
import {useState} from "react";
import BasicModal from "./BasicModal";

interface ITable {
    head:string[]
    body:IProduce[]
}


export const Table = ({head,body}:ITable) => {

    const boolArr = new Array(body.length).fill(false);
    const [isOpen, setIsOpen] = useState(boolArr);
    const handleCheck = (index) => {
        setIsOpen(prevState => prevState.map((item, idx) => idx === index ? !item : item))
    };
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col"><input type="checkbox"/></th>
                    {head.map((item,key)=>{
                        return <th key={key} scope="col">{item}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {body.map((row,idx) => (
                    <tr key={idx}>
                        <th scope="row"><input type="checkbox"/></th>
                        <th onClick={()=>handleCheck(idx)} scope="row">{row.id.id}</th>
                        <th onClick={()=>handleCheck(idx)} scope="row">{row.title.name}</th>
                        <th scope="row">{row.register}</th>
                        <th scope="row">{row.date}</th>
                        <th scope="row">{row.use ? "사용" : "사용안함"}</th>
                        <th scope="row">{row.hot_index}</th>
                        <th scope="row">{row.participate_index}</th>
                        <th scope="row">{row.comment_index}</th>
                        {isOpen[idx] && <BasicModal title={row.title.name} imageUrl={row.title.url} isOpen={isOpen[idx]} setIsOpen={()=>handleCheck(idx)} />}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}