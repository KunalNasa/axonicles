'use client'
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
interface sideLinks {
  icon?: React.ReactNode,
  title: string,
  href: string,
}
export default function Sidebar() {
  const links: sideLinks[] = [
    {
      title: "Dashboard",
      href: '/dashboard',
      icon: <RxDashboard />
    },
    {
      title: "Profile",
      href: '/profile',
      icon: <FiUser />
    },
    {
      title: "New Roadmap",
      href: '/new-roadmap',
      icon: <CiMap />
    },
    {
      title: "Explore",
      href: '/roadmaps',
      icon: <MdOutlineTravelExplore />
    }
  ]
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={`h-screen py-5 p-1 border-r-1 border-gray-800 overflow-hidden bg-secondary transition-all duration-400 ${isOpen ? "w-[210px]" : "w-[70px]"
        }`}
    >
      <button className={`w-full transition-all duration-300 px-2 py-4  flex ${isOpen ? 'justify-end' : 'justify-center text-xl'}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ?
          (
            <div className="flex text-xl hover:cursor-pointer items-center w-full justify-between">
              <h1 className="px-2">Axonicles</h1>
              <MdOutlineSpaceDashboard />
            </div>
          ) : <IoMdMenu />
        }
      </button>
      <Tabs isOpen={isOpen} links={links} />
    </div>
  );
}



function Tabs({ links, isOpen }: { links: Array<sideLinks>, isOpen: boolean }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {links.map((link) => {
        const isActive = pathname.endsWith(link.href)

        return (
          <Link
            key={link.title}
            href={link.href}
            className={`py-2 px-2 m-1 text-gray-300 rounded-md flex gap-2 items-center
              hover:bg-[var(--theme-color-tertiary)]
              ${isActive ? 'bg-tertiary-local' : ''}
              ${!isOpen ? 'justify-center' : ''}`}
          >
            <span className={`${!isOpen && 'text-xl'}`}>{link.icon}</span>
            {isOpen &&
              <span className="text-sm">
                {link.title}
              </span>
            }
          </Link>
        )
      })}
    </div>
  )
}