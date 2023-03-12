import { GiBrain } from "react-icons/gi";
const Header = () => {
  return (
    <header className="flex items-center gap-2 text-gray-100">
      <GiBrain className="font-semibold text-4xl text-fuchsia-600" />
      <span className="text-2xl font-bold">AIChat</span>
    </header>
  );
};

export default Header;
