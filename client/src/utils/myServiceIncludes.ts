import { type IconType } from "react-icons";
import { MdGTranslate, MdOutlineSpeed, MdChat, MdVerified, MdSupportAgent, MdLanguage, MdFactCheck, MdUpdate, MdHeadsetMic } from "react-icons/md";

interface Props {
    title: string;
    description: string;
    Icon: IconType;
}

export const myServiceIncludes: Props[] = [
    {
        title: "Traducción Profesional de Inglés a Español",
        description: "Ofrezco traducciones precisas de textos en inglés a español, adaptando el contenido y el tono para una mayor claridad y comprensión en el idioma destino.",
        Icon: MdGTranslate
    },
    {
        title: "Corrección y Revisión de Textos",
        description: "Reviso y corrijo traducciones previas o textos bilingües para asegurar que estén bien redactados y sin errores de estilo o gramaticales.",
        Icon: MdFactCheck
    },
    {
        title: "Servicio de Traducción Rápida",
        description: "Para proyectos con urgencia, ofrezco servicios de traducción acelerados con tiempos de entrega rápidos sin sacrificar la calidad.",
        Icon: MdOutlineSpeed
    },
    {
        title: "Traducción Certificada",
        description: "Proporciono traducciones certificadas, ideales para documentos legales o formales que requieren un aval profesional.",
        Icon: MdVerified
    },
    {
        title: "Soporte Lingüístico en Proyectos Internacionales",
        description: "Te acompaño en la adaptación lingüística de tus proyectos globales, asegurando que el contenido sea comprendido en ambos idiomas y culturas.",
        Icon: MdSupportAgent
    },
    {
        title: "Transcripción y Traducción de Audio/Video",
        description: "Transcribo y traduzco contenido de audio o video en inglés o español, ideal para conferencias, entrevistas o material multimedia.",
        Icon: MdHeadsetMic
    },
    {
        title: "Atención Personalizada para Proyectos Multilingües",
        description: "Acompañamiento y asistencia constante para proyectos de traducción en varios idiomas, asegurando la coherencia y calidad en todo momento.",
        Icon: MdChat
    },
    {
        title: "Localización de Sitios Web",
        description: "Adapto completamente tu sitio web del inglés al español o viceversa, garantizando que todo el contenido esté bien traducido y localizado según el mercado objetivo.",
        Icon: MdLanguage
    },
    {
        title: "Traducción y Actualización de Documentos",
        description: "Ofrezco servicios de actualización continua para traducir y mantener tus documentos actualizados según los cambios en tus contenidos o productos.",
        Icon: MdUpdate
    }
];