"use client";
export default function Home() {
  function handleSubmit() {
    console.log("submit");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gray-900  text-white flex justify-center items-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl mb-4">Toolschool: coming soon</h1>
          <p className="mb-4">
            Put in your email to get notified about upcoming sessions.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
