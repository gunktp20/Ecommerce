import { useAppDispatch, useAppSelector } from "../app/hook"
import { Navigate } from "react-router-dom";

interface IProp {
    children: string | JSX.Element
}

const ProtectedRoute = ({ children }: IProp) => {
    const { user } = useAppSelector(state => state.auth);
    if (!user) {
        return <Navigate to="/landing" />;
    }
    return children;
};

export default ProtectedRoute;