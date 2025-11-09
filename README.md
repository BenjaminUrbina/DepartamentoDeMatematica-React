
# Departamento de Matematica ULS
Este proyecto es completamnete independien y tiene como proposito mostrar el resultado de esta idea de mejora.

El departamento de matematica cuenta con una pagina web muy desactualizada y sin mantencion, es por esto que surgió la idea de realizarle 
una mejora visual y poder integrarle una base de datos. Con anterioridad se creo ya un repositorio, pero esta solo era una pagina web realizada con HTML5,CSS3,JAVASCRIPT,
la cual tenia como fin solo dar un esqueleto.

## Tecnologias utilizadas
- React
- Supabase (backend)
- CSS3
- Vercel (host front)

Contamos con otras herramientas las cuales nos ayudan a tener un mejor desarrollo del software, estas son :

- React Route
- React Boostrap
- React Helmet

Con respecto a supabase, pueden encontrar toda la información en [este link](https://supabase.com/). Se eligio por la facilidad de conexion y por el plan gratuito que
entrega para poder utilizarlo en proyectos pequeños como este.

## ¿El proyecto cuenta con variables de entorno?

Actualmente cuenta con las variables de entorno necesarias para poder conectarse a supabase, pero por el momento estan siendo integradas.
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

Estas variables te las da la misma supabase en caso de que quieras conectarte a tu propia base de datos.

## Tablas creadas
Actualmente estamos usando la tabla que tiene por defecto que tiene supabase, la cual puedes ver [aqui](https://supabase.com/docs/guides/auth/users).
La tabla de las noticas se llama posts, las cuales tiene las siguientes elementos:
