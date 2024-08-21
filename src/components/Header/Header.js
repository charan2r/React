import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="Header">
       <div className="hero">
           <div className="navbar">
               <div className="newlinks">
                  <ul>
                   <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                   <li><Link to="/courses"><i className="fa fa-university"></i> Courses</Link></li>
                   <li><Link to="/faq"><i className="fa fa-quora"></i> FAQ</Link></li>
                   <li><Link to="/about"><i className="fa fa-user"></i> About Us</Link></li>
                   <li><Link to="/contact"><i className="fa fa-phone"></i> Contact Us</Link></li>
                   <li><button>Sign In</button></li>
                  </ul>
               </div>  
           </div>
        </div>
      </div>
    );
  }
  
export default Header;