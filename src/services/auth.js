import Interceptor from "../auth/Interceptorr";

export const SignUpApi = async (body) => {
  const { formData } = body;
  console.log("formData", formData);

  try {
    const result = await Interceptor({
      endpoint: "/users/signup",
      method: "POST",
      body: formData,
    });
    console.log("Signup successful:", result);
    return result;
  } catch (error) {
    console.error("Signup error:", error);
  }
};
