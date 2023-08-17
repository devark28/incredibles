import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'INCREDIBLES | SERVICES',
}

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full p-6 relative inc-contacts-main">
      <div className="flex flex-col min-w-full">
        <Header page={1}/>
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
        <Footer/>
      </div>
    </main>
  )
}
