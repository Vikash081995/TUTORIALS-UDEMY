import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components";
import main from "../assets/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            maxime delectus, dolorem voluptatem placeat, dicta qui soluta sed
            deleniti at excepturi voluptatibus porro in rem et ratione pariatur
            animi odit?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/ Demo user
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
