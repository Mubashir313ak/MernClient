import axiosInstance from "./axios";

/**
 * Universal request function using axios instance.
 * @param {string} endpoint - The API endpoint (e.g., "/signup").
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.).
 * @param {Object} body - Request body for POST/PUT requests.
 * @param {string} token - Optional JWT token for authorization.
 * @param {Object} headers - Additional headers if needed.
 * @returns {Promise} - Returns a promise with the response or error.
 */
const Interceptor = async ({
  endpoint,
  method = "GET",
  body = {},
  token = "",
  headers = {},
}) => {
  try {
    const config = {
      url: endpoint,
      method,
      headers: {
        ...headers,
        ...(token && { Authorization: `Bearer ${token}` }), // Adds Authorization header if token is provided
      },
      ...(method !== "GET" && { data: body }), // Only attach body for non-GET requests
    };

    const response = await axiosInstance(config);
    return response.data; // Assuming the response data is needed
  } catch (error) {
    console.error("API request error:", error);
    throw error; // Throw error for further handling
  }
};

export default Interceptor;
