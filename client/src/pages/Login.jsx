import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="pt-40 min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-6">
      <div className="bg-white dark:bg-slate-800 p-12 rounded-3xl shadow-2xl w-full max-w-md border dark:border-slate-700 text-center">
        <User size={64} className="mx-auto text-green-600 mb-6" />
        <h2 className="text-3xl font-bold dark:text-white mb-6">Partner Portal</h2>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text"
            className="w-full p-4 bg-slate-50 dark:bg-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-green-500 transition-all border border-transparent" 
            placeholder="Username" 
          />
          <input 
            type="password" 
            className="w-full p-4 bg-slate-50 dark:bg-slate-700 rounded-xl dark:text-white outline-none focus:ring-2 focus:ring-green-500 transition-all border border-transparent" 
            placeholder="Password" 
          />
          <button className="w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/25">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}