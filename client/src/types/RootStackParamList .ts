import { SignUpPageProps } from "../pages/SignUpPage";

// Needed for typing the router: https://reactnavigation.org/docs/typescript/
export type RootStackParamList = {
    Home: undefined,
    SignUp: SignUpPageProps,
}