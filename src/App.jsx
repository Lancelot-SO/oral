import './App.css'
import banner from "./assets/oralbanner.png"

function App() {

  return (
    <div>
      <div className='relative'>
        <img src={banner} alt='banner'
          loading='lazy'
          className='w-full h-[100vh]'
        />
      </div>
      <div className='absolute top-[200px] right-[130px]'>
        <div className="flex  ">
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">
              Drop Anonymous Tip
            </h1>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Your Anonymous Message <b className='text-red-500'>*</b>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md resize-none shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block text-lg font-medium text-gray-700"
                >
                  Attach a Document (optional)
                </label>
                <input
                  type="file"
                  id="file"
                  className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-green-700 hover:file:bg-purple-100"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
