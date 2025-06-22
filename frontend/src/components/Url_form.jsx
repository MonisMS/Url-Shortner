
import { FiLink, FiCopy, FiCheck, FiGithub } from 'react-icons/fi';
import { useState } from 'react';
import { createShortUrl } from '../api/shortUrl.api.js';
const UrlForm = () => {
    const [url, setUrl] = useState('https://www.google.com');
    const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');


    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!url) {
    setError('Please enter a URL');
    return;
  }

  setIsLoading(true);
  setError('');

  try {
    const shortUrl = await createShortUrl(url);
    setShortUrl(shortUrl);
  } catch (error) {
    console.error('Error shortening URL:', error);
    setError(error.message || 'Failed to shorten URL');
  } finally {
    setIsLoading(false);
  }
}
   const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
            
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your long URL"
                className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {isLoading ? 'Processing...' : 'Shorten URL'}
            </button>
         

          {shortUrl && (
            <div className="mt-8 bg-gray-700/50 rounded-lg p-4 relative">
              <p className="text-gray-400 text-xs mb-1">Your shortened URL:</p>
              <div className="flex items-center">
                <a 
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors truncate mr-2 flex-1"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-600 hover:bg-gray-500 transition-colors"
                >
                  {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-gray-300" />}
                </button>
              </div>
            </div>
          )}
      

{error && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

        <div className="bg-gray-900/50 p-4 flex items-center justify-center text-gray-500 text-sm">
          <a
            href="https://github.com/MonisMS/Url-Shortner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300 transition-colors"
          >
            <FiGithub className="mr-2" />
            View on GitHub
          </a>
        </div>

              </form>
    
  );
};
export default UrlForm
