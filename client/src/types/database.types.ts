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
      communities: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      groups: {
        Row: {
          community_id: string | null
          created_at: string
          id: string
          name: string
        }
        Insert: {
          community_id?: string | null
          created_at?: string
          id: string
          name?: string
        }
        Update: {
          community_id?: string | null
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "groups_community_id_fkey"
            columns: ["community_id"]
            referencedRelation: "communities"
            referencedColumns: ["id"]
          }
        ]
      }
      "ofek-tests": {
        Row: {
          id: number
          message: string
        }
        Insert: {
          id?: number
          message: string
        }
        Update: {
          id?: number
          message?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          community_id: string
          created_at: string
          id: string
        }
        Insert: {
          community_id: string
          created_at?: string
          id: string
        }
        Update: {
          community_id?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_community_id_fkey"
            columns: ["community_id"]
            referencedRelation: "communities"
            referencedColumns: ["id"]
          }
        ]
      }
      "tasks-groups": {
        Row: {
          created_at: string
          group_id: string
          id: number
          task_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          id?: number
          task_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          id?: number
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks-groups_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks-groups_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      "users-groups": {
        Row: {
          created_at: string
          id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          user_id: number
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users-groups_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
