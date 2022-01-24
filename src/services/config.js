const devBaseUrl = "http://123.207.32.32:9001";
const proBaseUrl = "http://123.207.32.32:9001";

export const baseURL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl;

export const timeout = 5000;