import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

export default function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow sending OTP
            handleSendOTP();
          },
          "expired-callback": () => {
            alert("Recaptcha expired, please try again");
          }
        }
      );
    }
  };

  const handleSendOTP = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent successfully");
    } catch (error) {
      console.error("Error during OTP send:", error);
      alert("Failed to send OTP: " + error.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("Phone number verified successfully!");
    } catch (error) {
      console.error("OTP Verification Error:", error);
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2>Phone Login</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>

      {/* Required div for reCAPTCHA */}
      <div id="recaptcha-container"></div>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
}
