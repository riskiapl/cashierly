import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import Alert from "./Alert";

// Create Axios instance with default config
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Get token from storage if available
    const token = localStorage.getItem("token");

    // If token exists, add it to the headers
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    Alert.error("Request failed to send");
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can do something with successful responses if needed
    return response;
  },
  (error: AxiosError) => {
    // Handle specific HTTP errors
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          Alert.error(
            (data as any)?.error || "Unauthorized access. Please login again."
          );
          // Optional: redirect to login page or clear token
          localStorage.removeItem("token");
          break;

        case 403:
          Alert.error((data as any)?.error || "Access forbidden");
          break;

        case 404:
          Alert.error((data as any)?.error || "Resource not found");
          break;

        case 500:
          Alert.error(
            (data as any)?.error || "Server error. Please try again later."
          );
          break;

        default:
          // Use error message from the response if available
          Alert.error((data as any)?.error || "Something went wrong");
      }
    } else if (error.request) {
      // Request was made but no response received
      Alert.error("No response from server. Please check your connection.");
    } else {
      // Something happened in setting up the request
      Alert.error("An error occurred. Please try again.");
    }

    return Promise.reject(error);
  }
);

// Helper methods for common HTTP methods
const Axios = {
  get: <T>(url: string, config?: any) => instance.get<T>(url, config),

  post: <T>(url: string, data?: any, config?: any) =>
    instance.post<T>(url, data, config),

  put: <T>(url: string, data?: any, config?: any) =>
    instance.put<T>(url, data, config),

  patch: <T>(url: string, data?: any, config?: any) =>
    instance.patch<T>(url, data, config),

  delete: <T>(url: string, config?: any) => instance.delete<T>(url, config),

  // The original instance in case it's needed
  instance,
};

export default Axios;
