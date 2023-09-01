export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "ofek-test": {
        Row: {
          favNum: number | null
          id: number
          title: string | null
        }
        Insert: {
          favNum?: number | null
          id?: number
          title?: string | null
        }
        Update: {
          favNum?: number | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
