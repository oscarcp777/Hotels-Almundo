import HotelCtrl from '../controller/hotelCtrl';

// API Server Endpoints
module.exports = (app) => {
		app.route('/api/hotels/:id').get(HotelCtrl.get);
		app.route('/api/hotels').get(HotelCtrl.getAll);
		app.route('/api/hotels').post(HotelCtrl.create);
		app.route('/api/hotels/:id').put(HotelCtrl.update);
		app.route('/api/hotels/:id').delete(HotelCtrl.delete);
}
