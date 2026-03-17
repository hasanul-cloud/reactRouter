
function Contact() {
  return (
    <div className="my-4 bg-gray-900 flex items-center justify-center p-6 ">
      
      <div className="bg-zinc-900 shadow-xl rounded-2xl p-8 w-full max-w-lg border-2 border-gray-800">
        
        <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">
          Contact Us
        </h2>

        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contact
