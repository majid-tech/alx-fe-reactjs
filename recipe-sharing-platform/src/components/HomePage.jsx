import { useEffect, useState } from 'react'
import recipeData from '../data.json'

function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

  return (
    <main className="min-h-screen bg-amber-50 px-4 py-8 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-amber-900 sm:text-4xl">Recipe Sharing Platform</h1>
          <p className="mt-2 text-sm text-amber-700 sm:text-base">Discover and share your favorite recipes.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="overflow-hidden rounded-xl border border-amber-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />

              <div className="space-y-2 p-4">
                <h2 className="text-lg font-semibold text-amber-900">{recipe.title}</h2>
                <p className="text-sm leading-relaxed text-amber-700">{recipe.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
