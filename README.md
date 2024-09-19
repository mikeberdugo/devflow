# DevFlow

**DevFlow** es una aplicación integral para la gestión de informes diarios, tareas y notificaciones en equipos de desarrollo que utilizan el marco Scrum. La aplicación está diseñada para facilitar la administración de proyectos, la asignación de tareas y la generación de reportes en tiempo real tanto para Scrum Masters como para los miembros del equipo de desarrollo.

## Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- **Gestión de Usuarios:** 
  - Permite la autenticación de usuarios con roles específicos (Scrum Master, Desarrollador, etc.).
  - Los usuarios pueden ser asignados a equipos y proyectos.

- **Gestión de Equipos:**
  - Crea y administra equipos con identificadores únicos.
  - Permite la asignación de múltiples equipos a un Scrum Master.

- **Gestión de Proyectos:**
  - Administra proyectos con enlaces tanto a equipos como a desarrolladores responsables.
  - Permite la visualización y edición de detalles del proyecto.

- **Gestión de Tareas:**
  - Asigna y selecciona tareas diarias para los desarrolladores.
  - Los desarrolladores pueden marcar tareas como completadas o en progreso.

- **Reportes:**
  - Genera informes en tiempo real sobre el estado de los proyectos y tareas.
  - Permite la visualización de fallos, atrasos y progreso general.

- **Notificaciones:**
  - Envia alertas sobre fallos, atrasos y la necesidad de reasignar tareas.
  - Notificaciones en tiempo real para mantener al equipo informado.

## Tecnologías

- **Backend:** Django (Python) con Django REST Framework para la API.
- **Frontend:** React para una interfaz de usuario dinámica y responsiva.
- **Aplicación Móvil:** Flutter para una experiencia móvil consistente en iOS y Android.
- **Base de Datos:** PostgreSQL (o cualquier base de datos compatible con Django).
- **Otras Herramientas:** Docker para contenedores, Git para control de versiones.

## Instalación

### Requisitos

- Python 3.9 o superior
- Django 5.0.4
- Node.js (para el frontend)
- Flutter (para la aplicación móvil)

### Backend (Django)

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/devflow.git
   cd devflow
