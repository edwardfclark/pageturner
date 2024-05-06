import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <SignIn
      path="/sign-in"
      redirectUrl="/dashboard"
      afterSignInUrl="/dashboard"
    />
  );
}

export default SignInPage;
