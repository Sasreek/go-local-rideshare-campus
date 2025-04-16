
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { toast } from "sonner";

// Define the User type
type User = {
  id: string;
  email: string;
  name?: string;
} | null;

// Define the AuthContext type
interface AuthContextType {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props for the AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthProvider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // When Supabase is connected, useEffect will check for existing session
  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        // This is where you would typically check Supabase for an existing session
        setLoading(false);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      // This is where you would typically call Supabase signIn
      console.log("Signing in with", email);
      
      // Mock successful login for demo
      toast.success("Login successful!");
      
      // After connecting Supabase, this would use the actual user data
      setUser({
        id: "mock-user-id",
        email: email,
      });
    } catch (error) {
      toast.error("Failed to sign in");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string, name: string) => {
    try {
      setLoading(true);
      // This is where you would typically call Supabase signUp
      console.log("Signing up with", email);
      
      // Mock successful signup for demo
      toast.success("Account created successfully!");
      
      // After connecting Supabase, this would use the actual user data
      setUser({
        id: "mock-user-id",
        email: email,
        name: name,
      });
    } catch (error) {
      toast.error("Failed to create account");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      setLoading(true);
      // This is where you would typically call Supabase signOut
      console.log("Signing out");
      
      toast.success("You have been logged out");
      setUser(null);
    } catch (error) {
      toast.error("Failed to sign out");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Create the context value
  const value = {
    user,
    signIn,
    signUp,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
