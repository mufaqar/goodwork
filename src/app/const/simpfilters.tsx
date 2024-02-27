export const Filter_Item = [
    {
        id: 1,
        name: 'ToolVersion',
        filter: 'Choose The Simply Sync Tool Version',
        values: [
            {
                value: 'Version 3.8 - latest',
            },
            
        ]
    },
    {
        id: 2,
        name: 'AgentExchange',
        filter: 'Choose The Simply Transport Agent Exchange',
        values: [
            {
                value: 'Exchange 2010',
            },
            {
                value: 'Exchange 2008',
            },
            {
                value: 'Exchange 2006',
            },
        ]
    },
    {
        id: 3,
        name: 'WindowsVersion',
        filter: 'Choose Windows Version',
        values: [
            {
                value: 'Exchange 2010',
            },
            {
                value: 'Windows 2008',
            },
            {
                value: 'Windows 2006',
            },
        ]
    },
]

export type Filter_type = {
    [x: string]: any;
    name: any,
    filter: string,
    values: any
}