"use client";

import { useAuth } from "@clerk/nextjs";
import Sidebar from "./components/Sidebar";
import SignInPage from "./sign-in/[[...sign-in]]/page";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { isSignedIn } = useAuth();
	if (!isSignedIn) {
		return <SignInPage />;
	}
	return (
		<main className="flex items-start ">
			<Sidebar />
			{children}
		</main>
	);
};

export default AuthProvider;
