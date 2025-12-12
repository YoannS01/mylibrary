import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Menu navbar avec mon logo et mon bouton de connexion */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-16 py-4 shadow-sm dark:bg-zinc-900 dark:shadow-zinc-800">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            My Library
          </h1>
        </div>
        <div className="flex flex-1 justify-end">
          <button className="rounded-full px-6 py-2 font-medium text-black">Le Blog</button>
          <button className="rounded-full bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Connexion
          </button>
        </div>
      </nav>

      <main className="flex flex-1 w-full items-center justify-center bg-zinc-50 dark:bg-black py-16">
        <div className="w-full max-w-6xl px-6 md:px-16">

          <section className="flex flex-col lg:flex-row gap-12 items-center">

            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-8 leading-tight">
                Découvrez votre prochaine lecture !
              </h1>


              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Chercher un livre..."
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black rounded-full p-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>


            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-sm h-96 bg-blue rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/next.svg"
                  alt="Hero image"
                  width={300}
                  height={300}
                  className="dark:invert object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
