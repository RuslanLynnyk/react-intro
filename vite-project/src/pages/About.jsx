import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const About = () => {
  const [isAuth, setIsAuth] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
    if (!isAuth) {
      return <Navigate to="/" replace={true}/>
    }
//   },[isAuth, navigate]);
  return <div>About</div>;
};

export default About;
