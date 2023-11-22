import { AuthProvider } from "AuthContext";
import SignInScreen from "features/SignInScreen";
import SignUp from "features/SignUp";
import Account from "features/Account";
import GuestRoute from "general/components/AppRoutes/GuestRoute";
import PrivateRoute from "general/components/AppRoutes/PrivateRoute";
import AppToast from "general/components/AppToast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/sign-in"
                        element={
                            <GuestRoute>
                                <SignInScreen />
                            </GuestRoute>
                        }
                    />
                    <Route
                        path="/sign-up"
                        element={
                            <GuestRoute>
                                <SignUp />
                            </GuestRoute>
                        }
                    />
                    <Route
                        path="/account"
                        element={
                            <PrivateRoute>
                                <Account />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <AppToast />
        </AuthProvider>
    );
}

export default App;
