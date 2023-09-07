import { create } from 'zustand'
import { SupabaseAuthService } from "../services/auth/supabase-auth.service";

export const useServicesStore = create(() => ({
    authService: new SupabaseAuthService()
}))