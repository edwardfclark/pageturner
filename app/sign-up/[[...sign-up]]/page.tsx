import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return (
    <SignUp
      path="/sign-up"
      redirectUrl="/new-user"
      afterSignUpUrl="/new-user"
    />
  );
}

export default SignUpPage;
