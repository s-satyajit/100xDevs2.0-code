export default function InputBox({ label, placeholder, type, onChange }) {
  return (
    <div className="mb-4 text-left">
      {label && <label className="block text-sm mb-1">{label}</label>}
      <input
        className="border p-2 border-gray-300 focus:ring-2 focus:ring-gray-100 w-full rounded"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
