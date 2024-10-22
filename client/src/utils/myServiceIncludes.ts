import { type IconType } from "react-icons";
import { BsTranslate } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { HiOutlineTranslate } from "react-icons/hi";
import {  MdChat, MdWeb } from "react-icons/md";
import { PiSirenBold } from "react-icons/pi";

interface Props {
    title: string;
    description: string;
    Icon: IconType;
}

export const myServiceIncludes = (translation: Function): Props[] => [
    {
        title: translation("services.service-1.title"),
        description: translation("services.service-1.description"),
        Icon: HiOutlineTranslate
    },
    {
        title: translation("services.service-2.title"),
        description: translation("services.service-2.description"),
        Icon: FaPenFancy
    },
    {
        title: translation("services.service-3.title"),
        description: translation("services.service-3.description"),
        Icon: PiSirenBold
    },
    {
        title: translation("services.service-4.title"),
        description: translation("services.service-4.description"),
        Icon: BsTranslate
    },
    {
        title: translation("services.service-5.title"),
        description: translation("services.service-5.description"),
        Icon: MdChat
    },
    {
        title: translation("services.service-6.title"),
        description: translation("services.service-6.description"),
        Icon: MdWeb
    }
   
];