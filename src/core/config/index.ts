import * as dotenv from "dotenv";
dotenv.config();

// Create a configuration object to hold those environment variables.
const config = {
  // JWT important variables
  jwt: {
    // The secret is used to sign and validate signatures.
    secret: process.env.JWT_SECRET || "",
    expiration: parseInt(process.env.JWT_EXPIRATION || "0"),
    refreshExpiration: parseInt(process.env.JWT_REFRESH_EXPIRATION || "0"),
    // The audience and issuer are used for validation purposes.
    // audience: process.env.JWT_AUDIENCE,
    // issuer: process.env.JWT_ISSUER
  },
  // The basic API port and prefix configuration values are:
  port: process.env.PORT || 3000,
  prefix: process.env.API_PREFIX || "api",
  mongo: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/quiz",
  },
  env: process.env.ENV || "dev",
};

// Make our confirmation object available to the rest of our code.
export default config;
