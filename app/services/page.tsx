import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full p-6 relative inc-contacts-main">
      <div className="flex flex-col min-w-full">
        <nav className="flex inc-contact-nav">
          <div className="flex flex-1">
            <b className="flex items-center inc-logo"><a href="/">incredible</a></b>
            <ul className="flex flex-row list-none inc-header-links">
              <a href="services" className="inc-active-menu">
                <li className="p-6">services</li>
              </a>
              <a href="contacts">
                <li className="p-6">contacts</li>
              </a>
              {/* <a href="about">
                <li className="p-6">about us</li>
              </a> */}
              <a href="terms">
                <li className="p-6">terms</li>
              </a>
            </ul>
          </div>
          <div className="flex items-center">
            <button className="inc-services-btn">Get services here</button>
          </div>
        </nav>
        <div className="flex flex-1 min-h-fit justify-center">
          <table className="h-full flex justify-center items-center inc-services-table">
            <tbody className="flex flex-col justify-around w-full">
              <tr>
                <td colSpan={3} style={{fontSize: "1.5rem", marginBottom: "1.5rem"}}>All Platforms We Can Offer, It's cheap</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <span className="inc-win1 inc-contact-win"></span>
                  <span>Streaming</span>
                </td>
                <td>
                  <span className="inc-win2 inc-contact-win"></span>
                  <span>Bussiness</span>
                </td>
                <td>
                  <span className="inc-win3 inc-contact-win"></span>
                  <span>Database</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="inc-win4 inc-contact-win"></span>
                  <span>E-Commerce</span>
                </td>
                <td>
                  <span className="inc-win5 inc-contact-win"></span>
                  <span>Portfolio</span>
                </td>
                <td>
                  <span className="inc-win6 inc-contact-win"></span>
                  <span>APIs</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <EmailIcon className="inc-bottom-icons"/>
          <CallIcon className="inc-bottom-icons"/>
          <ShareIcon className="inc-bottom-icons"/>
        </div>
      </div>
    </main>
  )
}
