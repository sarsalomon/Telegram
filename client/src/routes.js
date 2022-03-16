import Auth from "./pages/Auth"
import Chat from "./pages/Chat"
import { CHAT_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTER_ROUTE,
        Component: Auth
    }
]