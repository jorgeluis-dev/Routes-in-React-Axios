import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/login';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;