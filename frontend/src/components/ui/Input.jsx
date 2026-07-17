function Input({ type = "text", placeholder = "", className = "", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}

export default Input;
