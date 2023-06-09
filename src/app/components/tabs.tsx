import Image from "next/image";
import Link from "next/link";
import React from "react";
import Article1 from '../../../public/images/article1.png';


const Tab_component = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
      <div>
        <h2 className="text-3xl font-semibold mb-4">
          <span className="text-Orange">Simply Sync </span> <span className="text-darkBlue"> to Active Directory</span>
        </h2>
        <p className="text-lg font-normal text-darkBlue">
          Simply Sync allows you to sync your Active Directory Passwords and other attributes to remote systems such as Office 365, LDAP, or other AD's.
          It is a fantastic solution for Service Providers and a great alternative for organizations that do not want the added complexity and cost that comes with establishing a trust between AD sites or an AD FS infrastructure.
        </p>
        <div className='my-7 text-center flex gap-4'>
          <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-Orange text-white rounded-[40px] border border-Orange'>
            Try for Free
          </Link>
          <Link href="#" className='text-lg font-medium px-[30px] py-[14px] bg-transparent text-darkBlue rounded-[40px] border border-darkBlue'>
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
            <li className="mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "py-[14px] md:px-[30px] px-[10px] rounded-[40px] text-base font-semibold  " +
                  (openTab === 1
                    ? "text-white bg-lightBlue "
                    : "text-darkBlue bg-white border border-darkBlue/10")
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
            <li className="mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "py-[14px] md:px-[30px] px-[10px] rounded-[40px] text-base font-semibold " +
                  (openTab === 2
                    ? "text-white bg-lightBlue "
                    : "text-darkBlue bg-white border border-darkBlue/10")
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
            <li className="mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "py-[14px] md:px-[30px] px-[10px] rounded-[40px] text-base font-semibold " +
                  (openTab === 3
                    ? "text-white bg-lightBlue "
                    : "text-darkBlue bg-white border border-darkBlue/10")
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
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Tab_component />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Tab_component />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Tab_component />
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