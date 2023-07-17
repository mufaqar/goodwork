import Image from "next/image";
import Link from "next/link";
import React from "react";
import Article1 from '../../../public/images/article1.png';


const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const handleFaq = (id: any) => {
    if (openTab === id) {
      return setOpenTab(id)
    }
    setOpenTab(id)
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-8"
            role="tablist"
          >
            {Tabs_Data.map((item: any, idx: number) => {
              return <li key={idx} className="flex-auto text-center">
                <span
                  className={
                    "w-full md:block py-[14px] md:px-[30px] px-[9px] rounded-[40px] md:text-base text-sm font-semibold cursor-pointer  " +
                    (openTab === item.id
                      ? "text-white bg-lightBlue "
                      : "text-darkBlue bg-white border border-darkBlue/10 hover:bg-lightBlue hover:text-white ")
                  }
                  onClick={() => handleFaq(item.id)}
                  data-toggle="tab"
                  role="tablist"
                >
                  {item.title1} {item.title2}
                </span>
              </li>
            })}

          </ul>
          <div className="relative flex flex-col min-w-0 mt-12">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                {Tabs_Data.map((item: any, idx: number) => {
                  return <div key={idx} className={openTab === item.id ? "block" : "hidden"} id="link1">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                      <div>
                        <h2 className="text-3xl font-semibold mb-4">
                          <span className="text-Orange">{item.title1} </span> <span className="text-darkBlue"> {item.title2} </span>
                        </h2>
                        {item.content?.map((item: any, _idx: number) => {
                          return <p key={_idx} className="text-lg font-normal text-darkBlue">
                            {item.para}
                          </p>
                        })}
                        <div className='my-7 text-center flex gap-4'>
                          <Link href="/register" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px] '>
                            Try for Free
                          </Link>
                          <Link href={item.link} className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue hover:bg-darkBlue hover:text-white rounded-[40px] border border-darkBlue'>
                            Learn More
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Image src={item.img} alt="img" />
                      </div>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <div className="container mx-auto px-4">
      <Tabs />
    </div>
  );
}



export const Tabs_Data = [
  {
    id: 1,
    title1: "Simply Sync",
    title2: "to Active Directory",
    img: Article1,
    link: "/simply-sync",
    content: [
      {
        para: "Simply Sync allows you to sync your Active Directory Passwords and other attributes to remote systems such as Office 365, LDAP, or other AD's.",
      },
      {
        para: "It is a fantastic solution for Service Providers and a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust between AD sites or an AD FS infrastructure.",
      },
    ]
  },
  {
    id: 2,
    title1: "Simply Sync",
    title2: "for Services Providers Components",
    img: Article1,
    link: "/simply-simp-agent",
    content: [
      {
        para: "Simply Sync allows you to sync your Active Directory Passwords and other attributes to remote systems such as Office 365, LDAP, or other AD's.",
      },
      {
        para: "It is a fantastic solution for Service Providers and a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust between AD sites or an AD FS infrastructure.",
      },
    ]
  },
  {
    id: 3,
    title1: "Simply Sync",
    title2: "for Office 365",
    img: Article1,
    link: "/simply-transport-agent",
    content: [
      {
        para: "Simply Sync allows you to sync your Active Directory Passwords and other attributes to remote systems such as Office 365, LDAP, or other AD's.",
      },
      {
        para: "It is a fantastic solution for Service Providers and a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust between AD sites or an AD FS infrastructure.",
      },
    ]
  },
]