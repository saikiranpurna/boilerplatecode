/**
 * Environment configuration utility
 * Provides type-safe access to environment variables
 */

export const env = {
  // App Environment
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || "development",

  // URLs
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",

  // Development
  DEBUG: process.env.DEBUG === "true",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
} as const;

// Type definitions for better TypeScript support
export type Environment = "development" | "staging" | "production";
export type LogLevel = "debug" | "info" | "warn" | "error";

// Utility functions
export const isDevelopment = env.APP_ENV === "development";
export const isStaging = env.APP_ENV === "staging";
export const isProduction = env.APP_ENV === "production";

// Validation function to ensure required environment variables are set
export function validateEnv() {
  const requiredVars = ["NEXT_PUBLIC_APP_URL", "NEXT_PUBLIC_API_URL"];

  const missing = requiredVars.filter((varName) => !process.env[varName]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

// Log current environment info (for debugging)
export function logEnvironmentInfo() {
  if (isDevelopment) {
    console.log("🌍 Environment Info:", {
      NODE_ENV: env.NODE_ENV,
      APP_ENV: env.APP_ENV,
      APP_URL: env.APP_URL,
      API_URL: env.API_URL,
      DEBUG: env.DEBUG,
      LOG_LEVEL: env.LOG_LEVEL,
    });
  }
}
