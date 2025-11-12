export default function ProjectCard({ title, desc, img }) {
    return (
        <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="text-2xl font-bold mb-3">
                Contact Us
                <span
                    className="ml-3 inline-block w-16 h-1 bg-pink-500 align-middle rounded"
                ></span>
            </h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        rows={ 4 }
                        placeholder="Your message..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}