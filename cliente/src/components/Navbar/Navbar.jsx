
import React, { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';

export default function Navbar() {
    const menu = useRef(null);

    const items = [
        {
            label: 'Projects',
            icon: 'pi pi-folder',
            items: [
                {
                    label: 'Projects',
                    icon: 'pi pi-book',
                    url: '/projects'
                },
                {
                    label: 'Archived Projects',
                    icon: 'pi pi-briefcase',
                    url: '/archived/profile'
                },
            ]
        },
        {
            label: 'Team Management',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Teams',
                    icon: 'pi pi-users',
                    url: '/teams'
                },
                {
                    label: 'Roles',
                    icon: 'pi pi-id-card',
                    url: '/roles'
                },
                {
                    label: 'Team Meetings',
                    icon: 'pi pi-calendar',
                    url: '/meetings'
                }
            ]
        },
        {
            label: 'Daily Meeting',
            icon: 'pi pi-calendar',
            items: [
                {
                    label: 'Daily Meeting',
                    icon: 'pi pi-book  ',
                    url: '/daily'
                },
                {
                    label: 'Difficulties',
                    icon: 'pi pi-exclamation-triangle',
                    url: '/difficulties'
                },
                {
                    label: 'Meeting Notes',
                    icon: 'pi pi-list-check ',
                    url: '/notes'
                }
            ]
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            items: [
                {
                    label: 'Task Summary',
                    icon: 'pi pi-file',
                    url: '/task/reports'
                },
                {
                    label: 'Project Progress',
                    icon: 'pi pi-chart-line',
                    url: '/progress/reports'
                },
                {
                    label: 'Team Performance',
                    icon: 'pi pi-star',
                    url: '/team/reports'
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            items: [
                {
                    label: 'Support',
                    icon: 'pi pi-phone',
                    url: '/support'
                },
                {
                    label: 'Feedback',
                    icon: 'pi pi-comment',
                    url: '/feedback'
                },
                {
                    label: 'About Us',
                    icon: 'pi pi-info-circle',
                    url: '/about'
                }
            ]
        }
    ];
    
    


    
    const items2 = [
        {
            label: 'Settings', // Configuraciones en inglés
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Profile', // Perfil
                    icon: 'pi pi-user',
                    url: '/profile'
                },
                {
                    label: 'Preferences', // Preferencias
                    icon: 'pi pi-sliders-h',
                    url: '/preferences' 
                }
            ]
        },
        {
            label: 'Logout', // Cerrar sesión en inglés
            icon: 'pi pi-sign-out',
            url: '/logout' 
        }
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

    const end = (
        // <div className="flex align-items-center gap-2">
        //     
        // </div>
        <div className="flex align-items-center gap-2">
            <Button icon="pi pi-user" rounded text severity="info" aria-label="User" onClick={(e) => menu.current.toggle(e)} />
            <TieredMenu model={items2} popup ref={menu} />
        </div>
    );


    return (
        <Menubar  model={items} start={start}  end={end}  />
    )
}
        