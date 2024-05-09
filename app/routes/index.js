import linedplanservice from './linkedplanservice-route.js';
import linkedser from './linkedser-routes.js';
import plancostshare from './plancostshare-routes.js';
import planservicecosts from './planservicecosts-routes.js'


const initializeRoutes = (app) => {

    app.use('/linkedplanservice', linedplanservice);
    app.use('/linkedser', linkedser);
    app.use('/plancostshare', plancostshare);
    app.use('/planservicecosts', planservicecosts);
}

export default initializeRoutes;