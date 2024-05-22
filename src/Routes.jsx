import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import Reset from "./pages/Reset/Reset";
import Feed from "./pages/Feed/Feed";
import Perfil from "./pages/Perfil/Perfil";
import RankFacul from "./pages/RankFacul/RankFacul";
import RankCurso from "./pages/RankCurso/RankCurso";

const Routes_APP = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/rankfacul" element={<RankFacul />} />
        <Route path="/rankcurso" element={<RankCurso />} />
      </Routes>
    </Router>
  );
};

export default Routes_APP;