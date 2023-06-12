import Image from "next/image";
import Link from "next/link";
import React from "react";
import Article1 from '../../../public/images/article1.png';
import { title } from "process";


const Tab_component = ({ title1, title2, para1, para2 }: any) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          <span className="text-Orange">{title1} </span> <span className="text-darkBlue"> {title2} </span>
        </h2>
        <p className="text-lg font-normal text-darkBlue">
          {para1}
        </p>
        <p className="text-lg font-normal text-darkBlue">
          {para2}
        </p>
        <div className='my-7 text-center flex gap-4'>
          <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white hover:bg-transparent hover:text-Orange border border-Orange rounded-[40px] '>
            Try for Free
          </Link>
          <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue hover:bg-darkBlue hover:text-white rounded-[40px] border border-darkBlue'>
            Learn More
          </Link>
        </div>
      </div>
      <div>
        <Image src={Article1} alt="img" />
      </div>
    </div>
  )
}
const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-8"
            role="tablist"
          >
            <li className="flex-auto text-center">
              <Link
                className={
                  "w-full md:block py-[14px] md:px-[30px] px-[9px] rounded-[40px] md:text-base text-sm font-semibold  " +
                  (openTab === 1
                    ? "text-white bg-lightBlue "
                    : "text-darkBlue bg-white border border-darkBlue/10 hover:bg-lightBlue hover:text-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Simply Sync to Active Directory
              </Link>
            </li>
            <li className="flex-auto text-center">
              <Link
                className={
                  "w-full md:block py-[14px] md:px-[30px] px-[9px] rounded-[40px] md:text-base text-sm font-semibold " +
                  (openTab === 2
                    ? "text-white bg-lightBlue "
                    : "text-darkBlue bg-white border border-darkBlue/10 hover:bg-lightBlue hover:text-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Simply Sync for Services Providers Components
              </Link>
            </li>
            <li className="flex-auto text-center">
              <Link
                className={
                  "w-full md:block py-[14px] md:px-[30px] px-[9px] rounded-[40px] md:text-base text-sm font-semibold " +
                  (openTab === 3
                    ? "text-white bg-lightBlue "
                    : "text-darkBlue bg-white border border-darkBlue/10 hover:bg-lightBlue hover:text-white ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Simply Sync for Office 365
              </Link>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 mt-12">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Tab_component
                    title1="Simply Sync"
                    title2="to Active Directory"
                    para1="Simply Sync allows you to sync your Active Directory Passwords and other attributes to remote systems such as Office 365, LDAP, or other AD's."
                    para2="It is a fantastic solution for Service Providers and a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust between AD sites or an AD FS infrastructure."
                  />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Tab_component
                    title1="Simply Sync"
                    title2="for Services Providers Components"
                    para1="Simply Sync allows you to sync your Active Directory Passwords and other attributes to remote systems such as Office 365, LDAP, or other AD's."
                    para2="It is a fantastic solution for Service Providers and a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust between AD sites or an AD FS infrastructure."
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Tab_component
                    title1="Simply Sync"
                    title2="for Office 365"
                    para1="Simply Sync allows you to sync your Active Directory Passwords and other attributes to remote systems such as Office 365, LDAP, or other AD's."
                    para2="It is a fantastic solution for Service Providers and a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust between AD sites or an AD FS infrastructure."
                  />
                </div>
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