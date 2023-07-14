export const NavLinks = [
    {
        id: 1,
        name: 'Products',
        link: '/products',
        sub_menu: [
            {
                name: 'Simply Sync Password',
                link: '/simply-sync',
            },
            {
                name: 'Simply SIMP Agent',
                link: '/simply-simp-agent',
            },
            {
                name: 'Simply Exhange Transport Agent',
                link: '/simply-transport-agent',
            }

        ]
    },
    {
        id: 2,
        name: 'Resources',
        link: '#resources',
        sub_menu: [
            {
                name: 'Download Software',
                link: '/download-software',
            },
            {
                name: 'Documentation',
                link: '/download-document',
            },
            {
                name: 'Frequently Asked Questions',
                link: '/faqs',
            }

        ]
    },
    {
        id: 3,
        name: 'About',
        link: '/company',
        sub_menu: [

            {
                name: 'Partner with Us',
                link: '/partner-with-us',
            },
            {
                name: 'Customers',
                link: '/customers',
            }

        ]
    },
    {
        id: 4,
        name: ' Q&A',
        link: '/question-answer',
    },
    {
        id: 5,
        name: 'Contuct Us',
        link: '/contact-us',
    },
]

export type NavLinksType = {
    [x: string]: any;
    name: string,
    link: string
}