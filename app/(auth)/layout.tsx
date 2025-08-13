import React from 'react'
import './auth-layout.css' // Import custom CSS for animation

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md rounded-lg p-3 shadow animate-fade-in mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;