import { useState } from 'react'
import { Link } from 'react-router-dom'
import recipeData from '../data.json'

function HomePage() {
  const [recipes] = useState(recipeData)

  return (
    <main className="min-h-screen bg-amber-50 px-4 py-8 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-amber-900 sm:text-4xl">Recipe Sharing Platform</h1>
          <p className="mt-2 text-sm text-amber-700 sm:text-base">Discover and share your favorite recipes.</p>
          <Link
            to="/add-recipe"
            className="mt-4 inline-block rounded-lg bg-amber-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Add Recipe
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => (
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="group overflow-hidden rounded-xl border border-amber-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
            >
              <article>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-44 w-full object-cover transition duration-300 group-hover:brightness-105"
                  loading="lazy"
                />

                <div className="space-y-2 p-4">
                  <h2 className="text-lg font-semibold text-amber-900">{recipe.title}</h2>
                  <p className="text-sm leading-relaxed text-amber-700">{recipe.summary}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
