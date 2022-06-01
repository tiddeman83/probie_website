import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faCalculator, faCoffee, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { faBooks } from '@fortawesome/pro-duotone-svg-icons';


export const SidebarData = [
    {
        title: "Beginpagina",
        icon: <FontAwesomeIcon icon={faHouseChimney} />,
        link: "/"
    },
    {
        title: "Rekenen",
        icon: <FontAwesomeIcon icon={faCalculator} />,
        link: "/rekenen"
    },
    {
        title: "Lezen",
        icon: <FontAwesomeIcon icon={faGlasses} />,
        link: "/lezen"
    },
    {
        title: "Boeken",
        icon: <FontAwesomeIcon icon={faBooks} />,
        link: "/boeken"
    },
    {
        title: "Andere dingen",
        icon: <FontAwesomeIcon icon={faCoffee} />,
        link: "/"
    },
    {
        title: "Placeholder 2",
        icon: <FontAwesomeIcon icon={faCoffee} />,
        link: "/"
    },
]

