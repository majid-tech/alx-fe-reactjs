import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialForm = {
  title: '',
  ingredients: '',
  steps: '',
}

function AddRecipeForm() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (event) => {
    const { name } = event.target
    setFormData((prev) => ({ ...prev, [name]: event.target.value }))
  }

  const validateForm = () => {
    const nextErrors = {}
    const ingredientsList = formData.ingredients
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean)

    if (!formData.title.trim()) {
      nextErrors.title = 'Recipe title is required.'
    }

    if (!formData.ingredients.trim()) {
      nextErrors.ingredients = 'Ingredients are required.'
    } else if (ingredientsList.length < 2) {
      nextErrors.ingredients = 'Please include at least two ingredients.'
    }

    if (!formData.steps.trim()) {
      nextErrors.steps = 'Preparation steps are required.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitMessage('')
      return
    }

    setErrors({})
    setSubmitMessage('Recipe submitted successfully!')
    setFormData(initialForm)
  }

  return (
    <main className="min-h-screen bg-amber-50 px-4 py-8 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold text-amber-900 sm:text-3xl">Add New Recipe</h1>
          <Link
            to="/"
            className="rounded-md border border-amber-300 px-3 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-100"
          >
            Back Home
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-2xl border border-amber-100 bg-white p-5 shadow-lg sm:p-8"
        >
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-semibold text-amber-900">
              Recipe Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Garlic Butter Salmon"
              className="w-full rounded-lg border border-amber-200 px-4 py-2 text-sm text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
            {errors.title ? <p className="mt-1 text-sm text-red-600">{errors.title}</p> : null}
          </div>

          <div>
            <label htmlFor="ingredients" className="mb-2 block text-sm font-semibold text-amber-900">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows={6}
              placeholder="Enter one ingredient per line or separated by commas"
              className="w-full rounded-lg border border-amber-200 px-4 py-3 text-sm text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
            {errors.ingredients ? <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p> : null}
          </div>

          <div>
            <label htmlFor="steps" className="mb-2 block text-sm font-semibold text-amber-900">
              Preparation Steps
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows={8}
              placeholder="Describe the preparation process step by step"
              className="w-full rounded-lg border border-amber-200 px-4 py-3 text-sm text-amber-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
            />
            {errors.steps ? <p className="mt-1 text-sm text-red-600">{errors.steps}</p> : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Submit Recipe
            </button>
            {submitMessage ? <p className="text-sm font-medium text-green-700">{submitMessage}</p> : null}
          </div>
        </form>
      </section>
    </main>
  )
}

export default AddRecipeForm
