export default function Home() {
	return (
		<main className="flex flex-col min-h-screen justify-center items-center gap-2">
			<label htmlFor="room" className="block text-sm font-medium text-gray-700">
				Enter a room number
			</label>
			<div className="">
				<input
					type="text"
					name="room"
					id="room"
					className="block px-4 py-2 rounded-md shadow-neumorphism sm:text-sm focus:outline-none"
					placeholder="#"
				/>
			</div>
		</main>
	);
}
