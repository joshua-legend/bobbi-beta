import {Button} from "../../../../../elements/element/Button";
import {ArrowDropDown, ArrowDropUp} from "@styled-icons/material";
import {DropdownMenu} from "./DropdownMenu";
import {useEffect, useRef, useState} from "react";
import {DropdownBox} from "./DropdownBox";

interface IDropdown {
    items:String[];
}

export const Dropdown = ({items}:IDropdown) =>{

    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [openMenu, setOpenMenu] = useState(false);
    const menu = useRef(null);
    const WIDTH = "20px";

    const selectItem = (elem:String) => {
        setOpenMenu(true);
        setSelectedItem(elem);
    }
    const switchMenu = () => {setOpenMenu(!openMenu);}

    const closeOpenMenus = (e)=>{
        if(menu.current && openMenu && menu.current.contains(e.target)) setOpenMenu(false)
    }
    useEffect(()=>{
        window.addEventListener("mousedown",closeOpenMenus)
        return window.removeEventListener("mousedown",closeOpenMenus)
    },[])

    return (
        <DropdownBox ref={menu}>
            <Button onClick={switchMenu}>
                <span>{selectedItem}</span>
                {openMenu ? <ArrowDropUp width={WIDTH} /> : <ArrowDropDown width={WIDTH}/>}
            </Button>
            <DropdownMenu hide={openMenu} >
                {items.map((elem,idx)=><div onClick={()=>selectItem(elem)} key={idx}>{elem}</div>)}
            </DropdownMenu>
        </DropdownBox>
    );
}