import { type IconType } from 'react-icons';
import style from './dropdownMenu.module.scss'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

interface Props {
    position?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    }
    menu?: {
        title: string;
        icon: IconType;
        path?: string;
        onClick?: () => void;
    }[];
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownMenu = ({setShowMenu, menu, ...props}: Props) => {

    useEffect(() => {
        function closeModal(e: MouseEvent) {
            console.log("x")
            const target = e.target as HTMLElement;
            if (target.id !== "dropdownmenu") {
                setShowMenu(false);
            }
        }
        window.addEventListener("click", closeModal);
        return () => window.removeEventListener("click", closeModal);
    }, []);

  return (
    <ul className={style.container} id='dropdownmenu' style={{
        top: props.position?.top,
        left: props.position?.left,
        right: props.position?.right,
        bottom: props.position?.bottom,
    }}>
        {menu && menu.map((item) => (
            <li key={item.title} >
                {item.onClick ? (
                <button  onClick={item.onClick}>
                    <item.icon />
                    {item.title}
                </button>
                ) : (
                <NavLink  to={item.path as string}>
                    <item.icon />
                    {item.title}
                </NavLink>
                )}
            </li>
        ))}
    </ul>
  )
}
