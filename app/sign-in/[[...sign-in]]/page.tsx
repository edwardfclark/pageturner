import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <SignIn
        path="/sign-in"
        redirectUrl="/dashboard"
        afterSignInUrl="/dashboard"
      />
    </div>
  );
}

export default SignInPage;
