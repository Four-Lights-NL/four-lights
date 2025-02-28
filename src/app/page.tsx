import FourLightsLogo from "@/components/FourLightsLogo";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center text-center text-white relative z-10">

			<main className="flex flex-col justify-center items-stretch rounded-xl z-11">
				<FourLightsLogo />
				<h1 className="ml-auto -mt-12 drop-shadow-xl text-sm subpixel-antialiased tracking-widest flex items-center justify-center gap-1 border-t-1 pl-10 pr-1 mr-25 select-none">
					<span>four</span>
					<span className="mt-[2px] h-[4px] w-[4px] animate-pulse rounded-full bg-white opacity-95" />
					<span>lights</span>
				</h1>
			</main>
			
			<div className="fixed bottom-4 right-4 flex items-center text-white opacity-70 hover:opacity-100 transition-opacity duration-300 text-xs">
				<a href="mailto:info@fourlights.nl" className="flex items-center gap-2 hover:underline">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-labelledby="emailIconTitle">
						<title id="emailIconTitle">Email</title>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					info@fourlights.nl
				</a>
			</div>
		</div>
	);
}
