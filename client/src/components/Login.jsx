import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { setAuthUser } = useAuth()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setMessage('')
        setLoading(true)

        try {
            const response = await axios.post('/api/user/login', {
                email: data.email,
                password: data.password,
            }, {
                withCredentials: true,
            })

            setMessage(response.data?.message || 'Login successful')
            if (response.data?.user) {
                setAuthUser(response.data.user)
            }
        } catch (error) {
            setMessage(error.response?.data?.error || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-base-200 px-4 py-10 text-base-content">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body p-6 sm:p-8">
                            <div className="mb-4">
                                <h2 className="text-2xl font-semibold">Log in</h2>
                                <p className="mt-1 text-sm text-base-content/60">Sign in to your account to continue.</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Email</label>
                                    <input type="email" placeholder="you@example.com" className="input input-bordered w-full" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } })} />
                                    {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium">Password</label>
                                    <input type="password" placeholder="Your password" className="input input-bordered w-full" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
                                    {errors.password && <p className="mt-1 text-xs text-error">{errors.password.message}</p>}
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="checkbox" />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-sm text-success hover:underline">Forgot?</a>
                                </div>

                                <button type="submit" className="btn btn-success w-full text-white" disabled={loading}>
                                    {loading ? 'Logging in...' : 'Log in'}
                                </button>
                            </form>

                            {message && <p className="mt-4 text-center text-sm text-base-content/70">{message}</p>}

                            <p className="mt-4 text-center text-sm text-base-content/60">
                                Don't have an account?{' '}
                                <Link to="/signup" className="font-medium text-success hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login