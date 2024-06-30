import React, { useState } from 'react';
import { FaBox } from "react-icons/fa";
import { IoCartOutline, IoCubeOutline } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { GoPeople } from "react-icons/go";

const navItems = [
    {
        icon: <LuHome />,
        itemName: "Dashboard"
    },
    {
        icon: <GoPeople />,
        itemName: "Customers"
    },
    {
        icon: <IoCubeOutline />,
        itemName: "Products"
    },
    {
        icon: <IoCartOutline />,
        itemName: "Orders"
    }
];

const NavVertical = () => {
    const [isActive, setIsActive] = useState(1);
    return (
        <div className="d-flex flex-column vh-100 p-3" style={{ backgroundColor:"#d9e7ff"}}>
            <div className="d-flex align-items-center mb-4">
                <FaBox className="me-2" />
                <span className="fw-bold" style={{ fontSize: "15px", whiteSpace: "nowrap" }}>Customer Management</span>
            </div>
            <nav className="nav flex-column" style={{ fontSize: "15px" }}>
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className={`nav-item d-flex align-items-center mb-3 p-2 rounded ${isActive === index ? 'bg-primary text-white' : 'bg-transparent text-dark'}`}
                        onClick={() => setIsActive(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        {item.icon}
                        <span className="ms-3">{item.itemName}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default NavVertical;
