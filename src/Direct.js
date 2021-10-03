import { useHistory } from "react-router";

const Direct = () => {
    const history = useHistory();
    history.push("/movie");
}

export default Direct;