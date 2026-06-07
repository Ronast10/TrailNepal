import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

export default function Register() {
  return (
    <AuthLayout title="Create account" subtitle="Join the TrailNepal community">
      <form className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Username</label>
          <input type="text" placeholder="e.g. wanderer99" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-moss-400" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-moss-400" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Password</label>
          <input type="password" placeholder="Min. 6 characters" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-moss-400" />
        </div>
        <button className="w-full bg-stone-900 text-stone-50 py-3 rounded-lg font-medium hover:bg-moss-400 transition-colors mt-4">
          Create Account
        </button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-200"></div></div>
        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-stone-400">or continue with</span></div>
      </div>

      <button className="w-full border border-stone-200 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors">
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-stone-600">
        Already have an account? <Link to="/login" className="text-moss-400 font-medium">Sign in</Link>
      </p>
    </AuthLayout>
  );
}