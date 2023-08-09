import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full p-6  inc-index-main">
      <div></div>
      <div className="flex flex-col min-w-full">
        <nav className="flex">
          <div className="flex flex-1">
            <b className="flex items-center inc-logo"><a href="/">incredible</a></b>
            <ul className="flex flex-row list-none inc-header-links">
              <a href="services">
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
        <div>
          <EmailIcon className="inc-bottom-icons"/>
          <CallIcon className="inc-bottom-icons"/>
          <ShareIcon className="inc-bottom-icons"/>
        </div>
      </div>
    </main>
  )
}
