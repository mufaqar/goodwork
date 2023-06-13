export const NavLinks = [
    {
        id: 1,
        name: 'Products',
        link: '/',
        sub_menu: [
            {
                name: 'Products',
                link: '#',
            },
            {
                name: 'Resources',
                link: '#',
            },
            {
                name: 'About',
                link: '#',
            },
            {
                name: 'Q&A',
                link: '#',
            },
            {
                name: 'Contuct Us',
                link: '#',
            },
        ]
    },
    {
        id: 2,
        name: 'Resources',
        link: '#',
        sub_menu: [
            {
                name: 'Products',
                link: '#',
            },
            {
                name: 'Resources',
                link: '#',
            },
            {
                name: 'About',
                link: '#',
            },
            {
                name: 'Q&A',
                link: '#',
            },
            {
                name: 'Contuct Us',
                link: '#',
            },
        ]
    },
    {
        id: 3,
        name: 'About',
        link: '#',
        sub_menu: [
            {
                name: 'Products',
                link: '#',
            },
            {
                name: 'Resources',
                link: '#',
            },
            {
                name: 'About',
                link: '#',
            },
            {
                name: 'Q&A',
                link: '#',
            },
            {
                name: 'Contuct Us',
                link: '#',
            },
        ]
    },
    {
        id: 4,
        name: ' Q&A',
        link: '/blogs',
    },
    {
        id: 5,
        name: 'Contuct Us',
        link: '#',
    },
]

export type NavLinksType = {
    [x: string]: any;
    name: string,
    link: string
}