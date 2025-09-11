"use client"

import type React from "react"
import { useState } from "react"
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [role, setRole] = useState("operation")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      navigate("/dashboard")
    }, 2000)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#96AB5D] via-[#C3D8DB] to-[#6A6D89]"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2F4253]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#96AB5D]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative flex min-h-screen items-center justify-center p-4">
        <style jsx global>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out forwards;
          }
          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out forwards 0.2s;
            opacity: 0;
          }
        `}</style>

        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col md:flex-row max-w-5xl w-full animate-fadeInUp">
          {/* Left Side: Enhanced image section */}
          <div className="relative w-full md:w-1/2 min-h-80 md:min-h-full animate-slideInLeft">
            <img
              src="/modern-metro-train-illustration-with-geometric-pat.jpg"
              alt="Kochi Metro Train Illustration"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F4253]/30 via-transparent to-[#96AB5D]/10"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h3 className="font-semibold text-[#2F4253] text-lg">Welcome to Kochi Mail</h3>
                <p className="text-sm text-[#6A6D89] mt-1">Streamlined metro operations management</p>
              </div>
            </div>
          </div>

          {/* Right Side: Enhanced login form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 space-y-8 animate-slideInRight">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-[#96AB5D] to-[#C3D8DB] rounded-xl">
                  <EnvelopeIcon className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-[#2F4253] to-[#6A6D89] bg-clip-text text-transparent">
                  Kochi Mail
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#6A6D89] font-medium">Induction & Planning System</p>
                <div className="w-16 h-1 bg-gradient-to-r from-[#96AB5D] to-[#C3D8DB] rounded-full mx-auto"></div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#2F4253] font-semibold text-lg">Please select your role to login:</p>
            </div>

            <div className="relative">
              <div className="flex rounded-xl bg-gray-100/80 p-1.5 backdrop-blur-sm border border-gray-200/50">
                <button
                  onClick={() => setRole("operation")}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                    role === "operation"
                      ? "bg-gradient-to-r from-[#96AB5D] to-[#C3D8DB] text-white shadow-lg scale-105"
                      : "text-[#6A6D89] hover:bg-white/50 hover:scale-102"
                  }`}
                >
                  Operation
                </button>
                <button
                  onClick={() => setRole("management")}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                    role === "management"
                      ? "bg-gradient-to-r from-[#96AB5D] to-[#C3D8DB] text-white shadow-lg scale-105"
                      : "text-[#6A6D89] hover:bg-white/50 hover:scale-102"
                  }`}
                >
                  Management
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl focus:outline-none focus:border-[#96AB5D] focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-[#96AB5D]/20 placeholder-gray-400"
                    placeholder="Enter your username"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#96AB5D]/0 to-[#C3D8DB]/0 group-focus-within:from-[#96AB5D]/5 group-focus-within:to-[#C3D8DB]/5 transition-all duration-300 pointer-events-none"></div>
                </div>

                <div className="relative group">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="w-full px-4 py-4 pr-12 bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl focus:outline-none focus:border-[#96AB5D] focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-[#96AB5D]/20 placeholder-gray-400"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6A6D89] hover:text-[#2F4253] transition-colors duration-200"
                  >
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#96AB5D]/0 to-[#C3D8DB]/0 group-focus-within:from-[#96AB5D]/5 group-focus-within:to-[#C3D8DB]/5 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#96AB5D] to-[#C3D8DB] text-white py-4 rounded-xl font-semibold hover:from-[#96AB5D]/90 hover:to-[#C3D8DB]/90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#96AB5D]/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            <div className="text-center">
              <button className="text-[#6A6D89] hover:text-[#2F4253] text-sm font-medium transition-colors duration-200 hover:underline">
                Forgot your password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
