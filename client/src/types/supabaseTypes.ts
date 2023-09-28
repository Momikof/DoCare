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
      categories: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: never
          name?: string | null
        }
        Update: {
          id?: never
          name?: string | null
        }
        Relationships: []
      }
      communities: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      groups: {
        Row: {
          community_id: number
          created_at: string
          id: number
          title: string
        }
        Insert: {
          community_id: number
          created_at?: string
          id?: number
          title?: string
        }
        Update: {
          community_id?: number
          created_at?: string
          id?: number
          title?: string
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
      "task-rejections": {
        Row: {
          id: number
          task_id: number
          user_id: string
        }
        Insert: {
          id?: number
          task_id: number
          user_id: string
        }
        Update: {
          id?: number
          task_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task-rejections_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task-rejections_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks: {
        Row: {
          accepted_by: string | null
          category_id: number | null
          category_text: string | null
          community_id: number | null
          created_at: string
          description: string | null
          end_date: string | null
          geo_location: unknown | null
          id: number
          is_urgent: boolean
          location: string | null
          start_date: string | null
          title: string
        }
        Insert: {
          accepted_by?: string | null
          category_id?: number | null
          category_text?: string | null
          community_id?: number | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          geo_location?: unknown | null
          id?: number
          is_urgent?: boolean
          location?: string | null
          start_date?: string | null
          title: string
        }
        Update: {
          accepted_by?: string | null
          category_id?: number | null
          category_text?: string | null
          community_id?: number | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          geo_location?: unknown | null
          id?: number
          is_urgent?: boolean
          location?: string | null
          start_date?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_accepted_by_fkey"
            columns: ["accepted_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
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
          group_id: number
          task_id: number
        }
        Insert: {
          created_at?: string
          group_id: number
          task_id: number
        }
        Update: {
          created_at?: string
          group_id?: number
          task_id?: number
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
          id: string
          username: string
        }
        Insert: {
          created_at?: string
          id: string
          username?: string
        }
        Update: {
          created_at?: string
          id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      "users-communities": {
        Row: {
          community_id: number
          created_at: string
          role: string
          user_id: string
        }
        Insert: {
          community_id: number
          created_at?: string
          role?: string
          user_id: string
        }
        Update: {
          community_id?: number
          created_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users-communities_community_id_fkey"
            columns: ["community_id"]
            referencedRelation: "communities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users-communities_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      "users-groups": {
        Row: {
          created_at: string
          group_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          group_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users-groups_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users-groups_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      "users-tasks": {
        Row: {
          created_at: string
          task_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          task_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          task_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users-tasks_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users-tasks_user_id_fkey"
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
