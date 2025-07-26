export function validateLogin({ email, password, mobileNumber }) {
  if (!password) return "Password is required.";
  if (!email && !mobileNumber) return "Please enter Email or Mobile Number.";

  if (email && (!email.includes("@") || !email.includes(".")))
    return "Invalid email address.";

  if (
    mobileNumber &&
    (mobileNumber.length < 10 || mobileNumber.length > 13)
  )
    return "Invalid phone number.";

  return null;
}
