// components/NavItem.jsx
const NavItem = ({ label, href }) => {
  return (
    <a href={href} className="text-white hover:text-yellow-300 px-4 py-2">
      {label}
    </a>
  );
};

export default NavItem;
