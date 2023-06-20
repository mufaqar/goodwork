import Senario1 from '../../../public/images/senario1.png';
import Senario2 from '../../../public/images/senario2.png';
import Senario3 from '../../../public/images/senario3.png';
import Senario4 from '../../../public/images/senario4.png';

export const Scenario_Data = [
    {
        id: 1,
        title: "Enterprise Scenario 1",
        img: Senario1,
        content: [
            {
                para: "1. Company A merges with Company B. They want to sync A.COM password to B.COM.",
            },
            {
                para: "2. Company A wants to sync passwords to HR or MIS database."
            },
        ]
    },
    {
        id: 2,
        title: "Enterprise Scenario 2",
        img: Senario2,
        content: [
            {
                para: "Company A wants to sync passwords to Microsoft Office 365 Exchange",
            },
        ]
    },
    {
        id: 3,
        title: "Hosting Provider Scenario 1",
        img: Senario3,
        content: [
            {
                para: "Hosting Provider wants to provide the customer with a way to sync account passwords in their Active Directory to a hosting provider’s Active Directory.",
            },
        ]
    },
    {
        id: 4,
        title: "Hosting Provider Scenario 2",
        img: Senario4,
        content: [
            {
                para: "1. Hosting Provider wants to provide the customer with a way to sync account passwords in the hosting provider’s Active Directory to customer’s Active Directory.",
            },
            {
                para: "2. Hosting Provider wants to sync password in hosted Active Directory to a partner solution."
            },
        ]
    },
]