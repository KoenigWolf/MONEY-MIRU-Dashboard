import Link from 'next/link';
import icons from '../icons/icons';

const SidebarItem = ({ item, isActive, isCollapsed, IconComponent }) => {
  return (
    <Link href={`/${item.id}`}>
      <div
        className={`flex items-center p-4 cursor-pointer ${isActive ? 'bg-blue-700' : 'bg-transparent'} 
          transition-colors duration-300 hover:bg-blue-500 active:bg-blue-800`}
      >
        <IconComponent className="w-6 h-6" />
        {!isCollapsed && <span className="ml-2">{item.name}</span>}
      </div>
    </Link>
  );
};

export default SidebarItem;
