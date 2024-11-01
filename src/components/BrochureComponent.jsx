import { useState } from 'react';

const BrochureComponent = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="max-w-lg w-full">
        <div className="flex justify-between mb-4 gap-8">
          <div className="relative items-center flex flex-col">
            <button
              aria-label="View Brochure"
              onClick={() => setShowPreview(!showPreview)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              View Brochure
            </button>
            {showPreview && (
              <div className="absolute mt-12 bg-gray-200 p-4 rounded-3xl w-64 shadow-lg">
                <div className="flex justify-center items-center text-black">
                  <img
                    src="/api/placeholder/200/160"
                    alt="Brochure"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
            )}
          </div>
          <button
            aria-label="Download Brochure"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrochureComponent;