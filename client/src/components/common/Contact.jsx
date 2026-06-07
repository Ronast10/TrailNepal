import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thank you! Your message has been sent.');
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 md:p-12">
      {/* Container Layout Grid */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Form */}
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6 order-2 md:order-1">
          <h3 className="text-xl font-semibold text-stone-800 border-b border-stone-100 pb-3">
            Send quick message :
          </h3>

          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1">
              Your Name :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">
              Your Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-stone-600 mb-1">
              Phone Number :
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1">
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-colors resize-y"
            ></textarea>
          </div>

          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded transition-colors duration-200 text-sm tracking-wide uppercase"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Right Side: Contact Details */}
        <div className="bg-stone-50 p-8 md:p-12 flex flex-col justify-center order-1 md:order-2 border-b md:border-b-0 md:border-l border-stone-100">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 inline-block border-b-2 border-stone-800 pb-1">
                Contact Us
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold block">Address :</strong> 
                Kalimati- Kathmandu, Nepal
              </p>

              <p>
                <strong className="text-stone-900 font-semibold block">Phone :</strong> 
                +977 9860002040
              </p>

              <p>
                <strong className="text-stone-900 font-semibold block">Mobile :</strong> 
                +977 9896174291
              </p>
              <p>
                <strong className="text-stone-900 font-semibold block">E-Mail :</strong> 
                <a 
                  href="mailto:travelsnamastenepal@gmail.com" 
                  className="text-stone-600 hover:text-stone-900 underline transition-colors"
                >
                  trailnepal2026@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}