import "@/app/globals.css";

const Menu: React.FC = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-menu">
        <ul>
          <li>
            <a href="" className="closebtn">
              &times;
            </a>
          </li>
          <li>
            <a href="#">
              <h2>Home</h2>
            </a>
          </li>
          <li>
            <a href="#">
              <h2>About</h2>
            </a>
          </li>
          <li>
            <a href="#">
              <h2>Work</h2>
            </a>
          </li>
          <li>
            <a href="contact">
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidenav-links">
        <a href="">LinkedIn</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
        <a href="">Webflow</a>
      </div>
    </div>
  );
};

export default Menu;
