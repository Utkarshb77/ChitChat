import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'

function Signup({ onSwitchToLogin }) {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setMessage('')
    setLoading(true)
    try {
      const userInfo = {
        name: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }

      const response = await axios.post('http://localhost:7777/user/signup', userInfo, {
        withCredentials: true,
      });

      if (response.data) {
        reset();
      }

      setMessage(response.data?.message || 'Account created successfully')
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10 text-base-content">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-5xl items-center lg:grid-cols-2 lg:gap-10">
        <section className="mb-8 space-y-5 lg:mb-0">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-success">ChitChat</p>

          <h1 className="max-w-md text-4xl font-bold leading-tight sm:text-5xl">
            Meet new people, share ideas, and stay connected.
          </h1>

          <p className="max-w-lg text-lg leading-8 text-base-content/70">
            Join thousands of conversations happening right now. Create your account and start chatting in seconds.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-base-content/70">
            <span className="rounded-full bg-base-100 px-4 py-2 shadow-sm">✨ Instant messaging</span>
            <span className="rounded-full bg-base-100 px-4 py-2 shadow-sm">🔒 Private & secure</span>
            <span className="rounded-full bg-base-100 px-4 py-2 shadow-sm">🚀 Fast & simple</span>
          </div>
        </section>

        <section className="w-full max-w-md lg:ml-auto">
          <div className="card border border-base-300 bg-base-100 shadow-lg">
            <div className="card-body p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold">Create Account</h2>
                <p className="mt-2 text-sm text-base-content/60">Join ChitChat and start chatting with people around the world.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <label className="mb-2 block text-sm font-medium">Username</label>
                  <input type="text" placeholder="Enter your username" className="input input-bordered w-full" {...register("username", { required: "Username is required" })} />
                  {errors.username && <p className="mt-1 text-xs text-error">{errors.username.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input type="email" placeholder="you@example.com" className="input input-bordered w-full" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } })} />
                  {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Password</label>
                  <input type="password" placeholder="Create a password" className="input input-bordered w-full" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
                  {errors.password && <p className="mt-1 text-xs text-error">{errors.password.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Confirm Password</label>
                  <input type="password" placeholder="Confirm your password" className="input input-bordered w-full" {...register("confirmPassword", { required: "Please confirm your password", validate: (value) => value === watch("password") || "Passwords do not match" })} />
                  {errors.confirmPassword && <p className="mt-1 text-xs text-error">{errors.confirmPassword.message}</p>}
                </div>

                <button type="submit" className="btn btn-success w-full text-white" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Account'}
                </button>
              </form>

              {message && <p className="mt-4 text-center text-sm text-base-content/70">{message}</p>}

              <p className="mt-6 text-center text-sm text-base-content/60">
                Already have an account?{' '}
                <button type="button" onClick={onSwitchToLogin} className="font-medium text-success hover:underline">Log in</button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Signup
