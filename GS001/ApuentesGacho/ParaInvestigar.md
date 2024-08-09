
# Módulo `crypto` en Node.js

El módulo `crypto` en Node.js proporciona funcionalidades de criptografía. No está en los módulos globales y debe ser importado explícitamente utilizando `require`:

```javascript
const crypto = require('crypto');

Este módulo se utiliza para:

Operaciones de cifrado y descifrado.
Generación de hashes.
Otras funcionalidades criptográficas.
```

# Uso de `console.group` y `console.groupEnd` en Node.js

Para indentar logs de consola en un nivel, puedes usar `console.group` y `console.groupEnd`. Estos métodos permiten agrupar mensajes de consola de manera jerárquica, facilitando la visualización de logs relacionados y su organización.

Aquí tienes un ejemplo de cómo usar `console.group`:

```javascript
console.group('Inicio del grupo');
console.log('Mensaje dentro del grupo');
console.group('Subgrupo');
console.log('Mensaje dentro del subgrupo');
console.groupEnd(); // Termina el subgrupo
console.log('Mensaje después del subgrupo');
console.groupEnd(); // Termina el grupo
```
En este ejemplo:

console.group('Inicio del grupo') inicia un grupo de mensajes.
console.group('Subgrupo') inicia un subgrupo dentro del grupo principal.
console.groupEnd() finaliza el grupo o subgrupo.
El uso de console.group y console.groupEnd crea una jerarquía visual en la consola, con los mensajes indentados de acuerdo a su grupo o subgrupo.

Las otras opciones no están diseñadas para la indentación de logs de consola:

A. console.log: Solo imprime mensajes en la consola sin ninguna jerarquía.
C. console.table: Imprime datos en formato de tabla.
D. console.count: Imprime el número de veces que se ha llamado a console.count con una etiqueta específica.