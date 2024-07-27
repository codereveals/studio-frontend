import React, { useState } from "react";
import { data } from "@/utils/data";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const MobileMenu = ({ isActive }) => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const handleToggleSubmenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderSubmenu = (submenus, parentIndex) => (
    <ul
      className={` ${
        openSubmenuIndex === parentIndex ? "block z-20 absolute" : "hidden"
      } left-0 mt-1 mb-4 bg-slate-900 z-20 py-5 px-4 rounded-md w-[230px] text-white`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="px-2 py-1">
          <Link href={submenu.url}>{submenu.name}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <menu className={isActive ? "active" : ""}>
      <nav className=" text-white">
        <ul className=" md:flex items-center gap-8 font-medium text-white">
          {data.map((item, index) => (
            <li
              key={index}
              className="mr-6 relative cursor-pointer"
              onClick={() => handleToggleSubmenu(index)}
            >
              {item.submenus ? (
                <>
                  {/* Render submenu if it exists */}
                  <span className="flex gap-2 items-center">
                    {item.name}
                    <span className="text-white">
                      <FaAngleDown />
                    </span>
                  </span>
                  {renderSubmenu(item.submenus, index)}
                </>
              ) : (
                // Always render Link component with href
                <Link href={item.url}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </menu>
  );
};

export default MobileMenu;
