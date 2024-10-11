interface Props {
    title: string
    path: string
}

export const menuNavbar = (translation: Function): Props[] => {


    return [
        {
            title: translation("navbar.about-me"),
            path: 'about'
        },
        // {
        //     title: translation("navbar.jobs"),
        //     path: 'jobs'
        // },
        {
            title: translation("navbar.contact"),
            path: 'contact'
        },
    ]
}