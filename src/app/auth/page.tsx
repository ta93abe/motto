"use client";

import * as Separator from "@radix-ui/react-separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Page() {
	return (
		<main className="flex flex-col min-h-screen items-center justify-center gap-4">
			<input
				type="email"
				name="email"
				id="email"
				className="block w-72 px-4 py-2 rounded-md shadow-neumorphism focus:outline-none"
				placeholder="email"
			/>
			<button
				type="button"
				className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Send you a magic link
			</button>
			<Separator.Root className="bg-neutral-300 data-[orientation=horizontal]:max-w-md data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
			<GitHubLogoIcon width={36} height={36} />
		</main>
	);
}
