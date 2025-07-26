export function validateSignupForm(state, otp) {
  const { firstName, email, mobileNumber, password } = state;

  if (!email || !mobileNumber || !password || !firstName) {
    return "All required fields must be filled.";
  }

  if (firstName.length < 3 || firstName.length > 15) {
    return "First name must be between 3 and 15 characters.";
  }

  if (!email.includes("@") || !email.includes(".")) {
    return "Invalid email format.";
  }

  if (mobileNumber.length < 10 || mobileNumber.length > 12) {
    return "Mobile number must be between 10–12 digits.";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  if (!otp) {
    return "OTP is required.";
  }

  return null;
}
