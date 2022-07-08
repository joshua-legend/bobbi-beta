import { MenuItem as MenuItemType } from "../../../../../util/constants/menu-items";
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {MenuBox} from "./MenuBox";
import MakeMenuList from "./MakeMenuList";
import ExpandIcon from "../ExpandIcon";

type MenuItemProps = {
    menuItem: MenuItemType,
};

export default function MenuItem({menuItem: { name, icon: Icon, url, depth, subItems }}: MenuItemProps) {
    const [isExpanded, toggleExpanded] = useState(false);
    const router = useRouter();
    const selected = router.asPath === url;
    const isNested = subItems && subItems?.length > 0;

    const onClick = () => {
        toggleExpanded((prev) => !prev);
    };

    return (
        <>
            <MenuBox size={"H4"} className={selected ? "selected" : ""} depth={depth}>
                <a>
                    <Link href={url} passHref>
                        <div className="menu-item">
                            <Icon />
                            <span>{name}</span>
                        </div>
                    </Link>
                </a>
                {isNested ? (<ExpandIcon isExpanded={isExpanded} handleClick={onClick} />) : null}
            </MenuBox>
            {isExpanded && isNested ? <MakeMenuList options={subItems} /> : null}
        </>
    );
}