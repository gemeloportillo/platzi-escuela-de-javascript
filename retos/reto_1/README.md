# Reto Uno A. Instalar el plugin zsh-suggestions
1. Instala, configura y haz una demostración del plugin ZSH Autosugestions que puedes encontrar aquí: https://github.com/zsh-users/zsh-autosuggestions. Comparte con tus compañeros de Escuela JS la importancia de este plugin y tus propios descubrimientos relacionados.

Este plugin permite dar sugerencias de autocompletado cuando escribimos en nuestra terminal. Permite incrementar el rendimiento en el uso de la Terminal

Ejemplo de uso en nuestra carpeta:

![Screenshot](../img/zsh-suggestions.png)

# Reto Uno B. Instalar el plugin Prettier
2. Instala, configura y has una demostración del plugin Prettier en tu editor de código.

**¿Cómo combinar Eslint y Prettier?**

Prettier se encarga de tu formato de código, ESLint se encarga de tu estilo de código. El primero hace todo automáticamente por ti. Si has configurado Prettier, puedes configurarlo para formatear tu archivo al guardarlo. De esa manera, nunca más tendrás que preocuparte por el formato de tu código. Como Prettier es muy obstinado, solo puede hacer configuraciones menores.

**1. Primero deberás asegurarte tener Prettier y ESLint instalado.**

Puedes instalarlos en un proyecto o globalmente con:

``
npm install -g prettier eslint
``

Instalarlo de manera global te permite usarlo en cualquiera de tus proyectos. De esta manera no tienes que preocuparte de instalarlos para cada uno. Sin embargo si trabajas en un proyecto como parte de un equipo, tiene sentido instalar también los dos paquetes a tu proyecto.

> Nota: si instalas ESLint globalmente, necesitas correr en la línea de comando de tu proyecto:

``
eslint --init
``

Esto te permite acceder a una configuración dinámica de ESLint en un proyecto base ([ver instalacion ESLint](https://github.com/gemeloportillo/platzi-escuela-de-javascript/blob/master/retos/Instalaci%C3%B3n-ESLint.txt))

**2.Instala las extensiones/pluggins para Prettier y ESLint en tu editor/IDE. En este caso VSCode.**

**3.Instala dos o mas paquetes que están a cargo de combinar Prettier y ESLint:**

``
    npm install --save-dev eslint-config-prettier eslint-plugin-prettier
``

Mientras que el primero desactiva todas las reglas de ESLint que podrían entrar en conflicto con Prettier, el segundo integra las reglas de Prettier en las reglas de ESLint.

**3.Por último, pero no menos importante, establece las reglas de Prettier en tu configuración de ESLint.** 

Por lo tanto, cree un archivo .eslintrc.json en el directorio raíz de tu proyecto y dale la siguiente configuración:

```json
    {
      "extends": ["prettier"],
      "plugins": ["prettier"],
      "rules": {
        "prettier/prettier": ["error"]
      },
    }
```


**Eso es todo.** Estas listo para usar Prettier y ESLint en tu proyecto sin preocuparte acerca de cualquier conflicto. 

ESLint sabe de todas las reglas de Prettier al integrar todas las reglas que se aplican y eliminar todas las reglas que podrían entrar en conflicto con ellas.

A partir de ahora no debería haber nada en tu camino para mejorar el estilo y la estructura del código.

Si necesitas excluir carpetas / archivos de tus reglas de ESLint, puedes agregarlos en archivo .eslintignore (por ejemplo, node_modules / *)


### Cómo contribuir
Puedes crear un pull request al proyecto

### Licencia
MIT
