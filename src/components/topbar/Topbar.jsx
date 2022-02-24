import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Portfolio</a>
                <div className="itemcontainer">
                    <Person className="icon"/>
                    <span>+977 9860673392</span>
                </div>
                <div className="itemcontainer">
                    <Mail className="icon"/>
                    <span>safalshakya99@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
