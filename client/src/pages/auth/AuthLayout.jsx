export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl text-stone-900">{title}</h1>
          <p className="text-stone-500 mt-2">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}