# Pruebai4digital

Para este ejercicio se utilizo visual studio code

Instalar los siguientes paquetes 

npm install typescript ts-node express "@types/express" morgan "@types/morgan" axios "@types/axios" nodemon

Ejecutar el comando 

npm run dev

Con esto iniciamos el servidor y nos dirigimos a http://localhost:6060/

Para el ejercicio se solicitaba

● Listar a los usuarios. http://localhost:6060/users o 
http://localhost:6060/users/1 según el ID
● Listar publicaciones. http://localhost:6060/posts o 
http://localhost:6060/posts/1 según el ID del post
● Consultar fotos de un usuario. http://localhost:6060/users/1/photos
Acá se tiene en cuenta que un usuario tiene varios albumes y cada album varias fotos, se lista todas las fotos que tenga 
el usuario en todos los albumes con el ID
● Listar Registros de peticiones realizadas. Se almacenan en el archivo 
./source/registroPeticion.json
● Editar registro de una petición. Comsumir el archivo 
./source/registroPeticion.json
● Eliminar registro de una petición. Comsumir el archivo 
./source/registroPeticion.json
● Exportar registros en base64. Se creo el archivo base64.js el cual luego de finalizar las consultas de usuario, 
se detiene el servicio o se abre una nueva terminar y se ejecuta el comando node base64.js y toma el archivo 
registroPeticion.json y lo convierte a base64 en consola


Pido disculpas por no tener un código más completo donde los registros base64 quedaran exportados a un archivo 
pero fue cuestión de tiempo, igual si se puede luego le puedo hacer el filewriter correspondiente
