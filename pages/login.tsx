import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    return 
    // return input group with emial using tailwind
    <div>
        <label htmlFor="email" className="block text-sm font-medium text-grey-700">
            Email
        </label>
        <div className="mt-2">
            <input
                id="email"
                name="email"
                type="email"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@gmail.com"
            />
        </div>
    </div>
    
    
}