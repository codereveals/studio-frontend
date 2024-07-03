import Link from "next/link";
import React, { useState } from "react";
import { data } from "@/utils/data";

const Menu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              "submenu"
            ) : (
              <li className="cursor-pointer text-white">
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
