import {Dashboard, ShoppingCart, People, AttachMoney, AddShoppingCart, Done,} from "@styled-icons/material";

type MenuOption = {
    name: string,
    icon: React.ComponentType,
    url: string,
    subItems?: MenuOption[],
};

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: "Dashboard",
        icon: Dashboard,
        url: "/",
    },
    {
        name: "콘텐츠 관리",
        icon: ShoppingCart,
        url: "/content",
        subItems: [
            {
                name: "제작 콘텐츠",
                icon: AddShoppingCart,
                url: "/content/produce",
            },
            {
                name: "참여 콘텐츠",
                icon: Done,
                url: "/content/participate",
            },
            {
                name: "댓글",
                icon: Done,
                url: "/content/comment",
            },
        ],
    },
    {
        name: "회원 관리",
        icon: People,
        url: "/member",
    },
    {
        name: "관리자 관리",
        icon: AttachMoney,
        url: "/admin",
    },
];


export type MenuItem = {
    name: string,
    icon: React.ComponentType,
    url: string,
    id: string,
    depth: number,
    subItems?: MenuItem[],
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
    return options.map((option, idx) => ({
        ...option,
        id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
        depth,
        subItems:
            option.subItems && option.subItems.length > 0
                ? makeMenuLevel(option.subItems, depth + 1)
                : undefined,
    }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
