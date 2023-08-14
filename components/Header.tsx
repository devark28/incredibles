import React from 'react'

export default function Header({page}:{page:number}) {
  return (
    <nav className="flex">
      <div className="flex flex-1">
        <b className="flex items-center inc-logo"><a href="/">incredible</a></b>
        <ul className="flex flex-row list-none inc-header-links">
          <a href="services"  className={(page==1)?("inc-active-menu"):("")}>
            <li className="p-6">services</li>
          </a>
          <a href="contacts"  className={(page==2)?("inc-active-menu"):("")}>
            <li className="p-6">contacts</li>
          </a>
          {/* <a href="about">
            <li className="p-6">about us</li>
          </a> */}
          <a href="terms"  className={(page==3)?("inc-active-menu"):("")}>
            <li className="p-6">terms</li>
          </a>
        </ul>
      </div>
      <div className="flex items-center">
        <button className="inc-services-btn">Get services here</button>
      </div>
    </nav>
  )
}
