/* eslint-disable react/prop-types */
const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
        <p className="text-gray-800">{message}</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
