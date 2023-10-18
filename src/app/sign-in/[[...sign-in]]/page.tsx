import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return (
		<main className="h-[100dvh] w-full grid place-items-center">
			<SignIn />;
		</main>
	)
}
