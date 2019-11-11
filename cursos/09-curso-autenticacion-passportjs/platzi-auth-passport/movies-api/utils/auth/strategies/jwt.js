const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

// de aqui vamos a usar e metodo para buscar el usuario a partir del email
const UsersService = require('../../../services/users');

// Hacerle saber a la estrategia con que secret fue firmado el jwt y verique que es completamente valido
const { config } = require('../../../config');

passport.use(
    new Strategy({
        //recibe como constructor los parametros:
        secretOrKey: config.authJwtSecret,
        //de donde vamos a sacar el jwt (header)
        //eso quiere decir que cuando hagamos una petición en donde queramos enviar nuestro jwt
        //lo que debemos hacer es enviarlo en el header como un bearerToken
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    //en la funcion callback va recibir el payload del token ya decodificado
    //y un callback donde vamos a definir si encontramos el usuario o debemos devolver un error.
    async function(tokenPayload, cb) {
        //instancia
        const usersService = new UsersService();

        try {
            //buscamos el usuario desde el token decodificado 
            const user = await usersService.getUser({ email: tokenPayload.email });

            if(!user) {
                //el usuario lo pasamos como false
                return cb(boom.unauthorized(), false);
            }
            //si encuentra el usuario borramos el pwd.
            delete user.password;
            //llamamos al atributo callback con un error nulo, devolvemos el usuario y 
            //un atributo scope que ya debe venir del token que ya previamente se ha firmado 
            cb(null, {...user, scopes: tokenPayload.scopes });

        } catch (error) {
            //llamamos el callback con el error.
            return cb(error);
        }
    })
);