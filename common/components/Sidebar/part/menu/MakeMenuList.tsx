import { MenuItem as MenuItemType } from "../../../../../util/constants/menu-items";
import MenuItem from "./MenuItem";

type MenuItemsListProps = {
    options: MenuItemType[],
};

export default function MakeMenuList({ options }: MenuItemsListProps) {
    return (
        <>
            {options.map((option) => (
                <MenuItem menuItem={option} key={option.id} />
            ))}
        </>
    );
}