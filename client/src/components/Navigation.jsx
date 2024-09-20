"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function Navigation() {
  return (
    <Navbar fluid rounded className="bg-gray-800 dark:bg-gray-900">
    
    

      <Navbar.Brand href="">
        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>


      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      
      
      <Navbar.Collapse  >
            <Navbar.Link href="#" className=" text-white hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Home
            </Navbar.Link>
            <Navbar.Link href="#" className=" text-white hover:bg-blue-500 hover:text-white transition-colors duration-300">
            About
            </Navbar.Link>
            <Navbar.Link href="#" className=" text-white hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Services
            </Navbar.Link>
            <Navbar.Link href="#" className=" text-white hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="#" className=" text-white hover:bg-blue-500 hover:text-white transition-colors duration-300">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
      

    </Navbar>
  );
}
