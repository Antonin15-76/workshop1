import { Route, Routes } from "react-router-dom"
import Accueil from "../../pages/home"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Accueil />} />
        </Routes>
    )
}

export default AppRoutes