
type Sidebar = {
    name: string,
    url: string,
    subItems?: Sidebar[],
};

export const SIDEBAR_ITEM: Sidebar[] = [
    {
        name: "콘텐츠 관리",
        url: "/content/produce",
        subItems: [
            {
                name: "제작 콘텐츠",
                url: "/content/produce",
            },
            {
                name: "참여 콘텐츠",
                url: "/content/participate",
            },
            {
                name: "댓글",
                url: "/content/comment",
            },
        ],
    },
    {
        name: "회원 관리",
        url: "/member",
    },
    {
        name: "관리자 관리",
        url: "/admin",
    },
];


