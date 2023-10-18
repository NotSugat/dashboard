import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return <main className="h-[100dvh] w-full grid place-items-center">
		<SignUp />
	</main>;
}
