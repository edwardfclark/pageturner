import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <SignUp
        path="/sign-up"
        redirectUrl="/new-user"
        afterSignUpUrl="/new-user"
      />
    </div>
  );
}

export default SignUpPage;
