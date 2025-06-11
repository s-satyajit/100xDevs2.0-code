export default function Button({ label, type, onClick }) {
  return (
    <button
      type={type}
      className="w-full rounded-lg text-sm font-medium me-2 text-white bg-gray-800 focus:ring-4 focus:ring-gray-400 hover:bg-gray-900 px-5 py-2.5 mb-2 mt-4 cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
