import Footer from "@/components/Footer"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full p-6 relative inc-contacts-main">
      <div className="flex flex-col min-w-full">
        <Header page={2}/>
        <div className="flex flex-1 min-h-fit">
          <div className="flex flex-[1.7] flex-col items-center justify-center">
            <div className="inc-hero-text inc-contacts-hero">
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
                                  <img src="dever1.jpeg" alt="dever1"/>
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
                                  <img src="dever22.jpeg" alt="dever2"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-center">
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
