export const NavLinks = [
    {
        id: 1,
        name: 'Products',
        link: '/products',
        sub_menu: [
            {
                id: 1,
                name: 'Simply Sync Password',
                link: '/simply-sync',
            },
            {
                id: 2,
                name: 'Simply SNMP Agent',
                link: '/simply-snmp-agent',
            },
            {
                id: 3,
                name: 'Simply Exhange Transport Agent',
                link: '/simply-transport-agent',
                sub_menu1: [
                    {
                        name: 'Install & Configuration',
                        link: '/simply-transport-agent/install-and-configuration',
                    },
                    {
                        name: 'Administration Guide',
                        link: '/simply-transport-agent/administration-guide',
                    }

                ]
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
        name: 'Contact Us',
        link: '/contact-us',
    },
]

export type NavLinksType = {
    [x: string]: any;
    name: string,
    link: string
}
