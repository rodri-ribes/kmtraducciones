import { type IconType } from "react-icons";
import { BsPen } from "react-icons/bs";
import { MdGTranslate } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { TbTools } from "react-icons/tb";



interface Props {
    title: string;
    Icon: IconType;
    description: string;
}

export const skills: Props[] = [
    {
        title: "Dominio bilingüe",
        Icon: RiSpeakLine ,
        description: "Manejo avanzado de gramática, vocabulario y expresiones idiomáticas en ambos idiomas."
    },
    {
        title: "Competencia Cultural",
        Icon: MdGTranslate,
        description: "Capacidad para adaptar traducciones al contexto cultural de inglés y español."
    },
    {
        title: "Precisión y detalle",
        Icon: BsPen,
        description: "Traducciones exactas, sin perder el sentido ni coherencia en términos técnicos."
    },
    {
        title: "Gestión de terminología",
        Icon: TbTools,
        description: "Uso de herramientas para asegurar consistencia terminológica en proyectos complejos."
    },

]