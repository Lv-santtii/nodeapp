// Middleware el cual tiene la funcion de dar aviso mediante consola, cuando alguien accede a los diferentes HTML que posee la aplicacion //

const authMiddleware = (req, res, next) => {
  if (req.url === '/' || req.url.endsWith('.html')) {
    console.log(`Nueva entrada a: ${req.url}`);
  }
  next(); 
};

module.exports = authMiddleware;