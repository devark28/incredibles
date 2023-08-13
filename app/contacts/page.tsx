import Footer from "@/components/Footer"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full p-6 relative inc-contacts-main">
      <div className="flex flex-col min-w-full">
        <nav className="flex inc-contact-nav">
          <div className="flex flex-1">
            <b className="flex items-center inc-logo"><a href="/">incredible</a></b>
            <ul className="flex flex-row list-none inc-header-links">
              <a href="services">
                <li className="p-6">services</li>
              </a>
              <a href="contacts" className="inc-active-menu">
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
        <div className="flex flex-1 min-h-fit">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="inc-hero-text">
                <table className="h-full w-full inc-contacts-table">
                    <tbody className="flex flex-col h-full">
                        <tr className="flex flex-1">
                            <td>
                                <div className="flex flex-col">
                                    <span>SHIMWA Bruce Emmanuel</span>
                                    <div className="flex flex-1">dolor consptadom aiosdvhoaidufhoasidufhoauishefliashodfiuhsoiduhcosiudn 8hsofiuhs oidhofisuhodiu</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <AccountCircleIcon className="h-full w-full"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="flex flex-1">
                            <td>
                                <div className="flex flex-col">
                                    <span>VUGUZIGA Shema Vainqeuer</span>
                                    <div className="flex flex-1">dolor consptadom aiosdvhoaidufhoasidufhoauishefliashodfiuhsoiduhcosiudn 8hsofiuhs oidhofisuhodiu</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <AccountCircleIcon className="h-full w-full"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-end">
            <div className="inc-hero-services inc-contact-services">
              <div>
                <span className="inc-win1"></span>
                <span className="inc-win2"></span>
              </div>
              <div>
                <span className="inc-win3"></span>
                <span className="inc-win4"></span>
              </div>
              <div>
                <span className="inc-win5"></span>
                <span className="inc-win6"></span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
