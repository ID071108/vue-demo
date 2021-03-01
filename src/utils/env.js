/*
 * @author       : shuwang.wu@getech.cn
 * @createdDate  : 2021-02-26 11:39:11
 * @version      : 1.0
 * @modifier     : shuwang.wu@getech.cn
 * @modifiedDate : 2021-02-26 11:39:45
 * @reason       :
 * @FilePath     : \vite-demo\src\utils\env.js
 */

/**
 * Get the global configuration (the configuration will be extracted independently when packaging)
 */
export function getGlobEnvConfig() {
  const env = import.meta.env;
  return env;
}

/**
 * @description: Development model
 */
export const devMode = "development";

/**
 * @description: Production mode
 */
export const prodMode = "production";

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv() {
  return import.meta.env.MODE;
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode() {
  return import.meta.env.DEV;
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode() {
  return import.meta.env.PROD;
}

/**
 * @description: Whether to open mock
 * @returns:
 * @example:
 */
export function isUseMock() {
  return import.meta.env.VITE_USE_MOCK === "true";
}
