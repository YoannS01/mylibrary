import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">

      <nav className="sticky top-0 z-50 flex items-center justify-between gap-8 bg-white px-16 py-4 shadow-sm dark:bg-zinc-900 dark:shadow-zinc-800">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            My Library
          </h1>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Chercher un livre..."
              className="w-full px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black rounded-full p-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <button className="mr-4 rounded-full px-6 py-2 font-medium text-black">A propos</button>
          <button className="mr-4 rounded-full px-6 py-2 font-medium text-black">Le Blog</button>
          <button className="rounded-full bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Connexion
          </button>
        </div>
      </nav>

      <main className="flex flex-1 w-full items-center justify-center bg-zinc-50 dark:bg-black py-16">
        <div className="w-full max-w-6xl px-6 md:px-16">

          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-2">
              Découvrez votre prochaine lecture !
            </h1>
          </section>


          <section>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
              Recommandations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>


              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>


              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>


              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section className="mt-20">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
              Catégories
            </h2>


            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors">
                Art
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                S-F
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                Fantaisie
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                Biographie
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                Histoire
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                Science
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                Jeunesse
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                Musique
              </button>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>


              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>


              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>


              <div className="flex flex-col gap-4 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-md p-0">
                <div className="relative w-full h-64 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/name_rose_cover.jpg"
                    alt="Book cover"
                    width={180}
                    height={300}
                    className="dark:invert object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Titre du Livre
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nom de l'auteur
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
