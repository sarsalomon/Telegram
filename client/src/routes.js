import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import { CHAT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const AuthRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]

export const PublicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]