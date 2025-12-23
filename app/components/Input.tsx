interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input( { type, placeholder, value, onChange, className } : InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value} onChange={onChange}
        className={`pl-12 px-4 h-12 border-2 border-gray-300 w-full rounded-2xl ${className} focus:border-[#C5DA69] focus:outline-none`} />
    </div>
  );
}