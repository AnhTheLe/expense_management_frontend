import { AuthProvider } from "AuthContext";
import SignInScreen from "features/SignInScreen";
import SignUp from "features/SignUp";
import GuestRoute from "general/components/AppRoutes/GuestRoute";
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
                </Routes>
            </BrowserRouter>
            <AppToast />
        </AuthProvider>
    );
}

export default App;
