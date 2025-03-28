import React from 'react'

const Menu = () => {
  return (
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box m-10">
        <li>
        <a className="flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21h10a2 2 0 002-2v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2a2 2 0 002 2zm-1-8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"
                />
            </svg>
            <span>Men Shoes</span>
            <span className="badge badge-xs">99+</span>
        </a>
        </li>
        <li>
        <a className="flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21h10a2 2 0 002-2v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2a2 2 0 002 2zm-1-8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"
                />
            </svg>
            <span>Women Shoes</span>
            <span className="badge badge-xs badge-warning">NEW</span>
        </a>
        </li>
        <li>
            <a>
            Kids Shoes
            <span className="badge badge-xs badge-info"></span>
            </a>
        </li>
    </ul>
  )
}

export default Menu