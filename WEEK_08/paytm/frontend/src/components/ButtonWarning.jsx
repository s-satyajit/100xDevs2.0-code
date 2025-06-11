import { Link } from "react-router-dom";

export default function ButtonWarning({ label, to, buttonText }) {
  return (
    <div className="py-2 text-sm justify-center flex">
      <div>{label}</div>
      <Link to={to} className="pl-1 underline cursor-pointer">
        {buttonText}
      </Link>
    </div>
  );
}
