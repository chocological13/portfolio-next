import "./navbar.css";

const NavBar: React.FC = () => {
  return (
    <div className="NavBar">
      <div className="nav-item">
        <a href="">@Ayush Barnwal</a>
      </div>
      <div className="nav-item nav-right">
        <a href="">About</a>
        <a href="">Work</a>
        <a href="contact">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
