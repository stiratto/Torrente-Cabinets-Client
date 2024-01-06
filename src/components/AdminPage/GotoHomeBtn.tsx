import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const GotoHomeBtn = () => {
  return (
    <Link to={"/torrentekcb/admin"} className="self-start mb-8 mx-3">
      <Button>Goto home</Button>
    </Link>
  );
};

export default GotoHomeBtn;
