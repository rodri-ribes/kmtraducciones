
interface Props {
    number: string;
    description: string;
}

export const worksCarriedOut = (translation: Function): Props[] => [
    {
        number: '+50',
        description: translation("worksCarriedOut.oneText")
    },
    {
        number: '+20',
        description: translation("worksCarriedOut.twoText")
    },
    {
        number: '+10',
        description: translation("worksCarriedOut.threeText")
    },
    {
        number: '+40',
        description: translation("worksCarriedOut.fourText")
    },
]