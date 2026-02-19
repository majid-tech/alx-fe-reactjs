import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import recipeData from '../data.json'

function RecipeDetail() {
  const { id } = useParams()
  const recipe = recipeData.find((item) => String(item.id) === String(id)) || null

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = recipe ? `${recipe.title} | Recipe Sharing Platform` : 'Recipe Not Found | Recipe Sharing Platform'

    return () => {
      document.title = 'Recipe Sharing Platform'
    }
  }, [recipe])

  if (!recipe) {
    return (
      <main className="min-h-screen bg-amber-50 px-4 py-10">
        <div className="mx-auto max-w-2xl rounded-xl border border-amber-100 bg-white p-6 text-center shadow-md">
          <h1 className="text-2xl font-bold text-amber-900">Recipe Not Found</h1>
          <p className="mt-2 text-amber-700">We could not find the recipe you requested.</p>
          <Link
            to="/"
            className="mt-4 inline-block rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-amber-50 px-4 py-8 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-6 inline-block rounded-md border border-amber-300 px-4 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-100"
        >
          Back to Recipes
        </Link>

        <article className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-lg">
          <img src={recipe.image} alt={recipe.title} className="h-64 w-full object-cover sm:h-80" />

          <div className="space-y-8 p-6 sm:p-8">
            <header>
              <h1 className="text-3xl font-bold text-amber-900 sm:text-4xl">{recipe.title}</h1>
              <p className="mt-3 text-base leading-relaxed text-amber-700">{recipe.summary}</p>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-amber-50 p-5">
                <h2 className="text-xl font-semibold text-amber-900">Ingredients</h2>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-amber-800 sm:text-base">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={`${ingredient}-${index}`}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-orange-50 p-5">
                <h2 className="text-xl font-semibold text-amber-900">Instructions</h2>
                <ol className="mt-3 list-inside list-decimal space-y-3 text-sm leading-relaxed text-amber-800 sm:text-base">
                  {recipe.instructions.map((step, index) => (
                    <li key={`${step}-${index}`}>{step}</li>
                  ))}
                </ol>
              </div>
            </section>
          </div>
        </article>
      </section>
    </main>
  )
}

export default RecipeDetail
