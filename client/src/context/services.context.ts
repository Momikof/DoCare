import { createContext } from "react";
import { AuthService } from "../services/auth/auth-service.interface";

interface ServicesContext {
    authService: AuthService
}

export const ServiceContext = createContext<ServicesContext>({
    authService: null
});