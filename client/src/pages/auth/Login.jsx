import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

export default function Login() {
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your account">
      <form className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email</label>
          <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-moss-400" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Password</label>
          <input type="password" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 outline-none focus:border-moss-400" />
        </div>
        <button className="w-full bg-stone-900 text-stone-50 py-3 rounded-lg font-medium hover:bg-moss-400 transition-colors mt-4">
          Sign In
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-stone-600">
        Don't have an account? <Link to="/register" className="text-moss-400 font-medium">Create one</Link>
      </p>
    </AuthLayout>
  );
}