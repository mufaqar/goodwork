export const NavLinks = [
    {
        id: 1,
        name: 'Products',
        link: '#products',
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
        link: '#resources',
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
        link: '#about',
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
        link: '#faqs',
    },
    {
        id: 5,
        name: 'Contuct Us',
        link: '#contact-us',
    },
]

export type NavLinksType = {
    [x: string]: any;
    name: string,
    link: string
}