interface Props {
    title: string
    path: string
}

export const menuNavbar = (translation: Function): Props[] => {


    return [
        {
            title: translation("navbar.start"),
            path: 'home'
        },
        {
            title: translation("navbar.about-me"),
            path: 'about'
        },
        {
            title: translation("navbar.services"),
            path: 'services'
        },
        {
            title: translation("navbar.contact"),
            path: 'contact'
        },
    ]
}