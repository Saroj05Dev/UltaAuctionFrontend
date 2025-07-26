import SignupForm from "../components/SignupForm";
import { useSignupForm } from "../hooks/useSignupForm";

function SignupPage() {
  const {
    otp,
    setOtp,
    isOTPSent,
    sendOtpHandler,
    handleFormSubmit,
    handleUserInput,
    loading,
  } = useSignupForm();

  return (
    <SignupForm
      otp={otp}
      setOtp={setOtp}
      isOTPSent={isOTPSent}
      sendOtpHandler={sendOtpHandler}
      handleFormSubmit={handleFormSubmit}
      handleUserInput={handleUserInput}
      loading={loading}
    />
  );
}

export default SignupPage;
