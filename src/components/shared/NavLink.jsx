import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`hover:text-[#FFBD37] transition-all font-medium ${isActive ? "text-[#FFBD37]" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
