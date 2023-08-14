import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full p-6  inc-index-main">
      <div></div>
      <div className="flex flex-col min-w-full">
        <Header/>
        <div className="flex flex-1 min-h-fit">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="inc-hero-text">
              <b>Lorem ipsum dolor sit amet</b>
              <p>consectetur adipiscing elit. In a est consectetur dui suscipit fermentum. Nullam id tincidunt risus, id viverra lorem. Proin hendrerit metus libero, a auctor odio pellentesque eget. Phasellus eget elementum magna. Nullam aliquam odio ac purus aliquet elementum. Curabitur ex ipsum, varius eget mollis at, ornare id risus.</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-end">
            <div className="inc-hero-services">
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
                <span className="inc-win7"></span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
