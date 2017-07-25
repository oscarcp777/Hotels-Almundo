import Hotel from '../models/hotel'

/** create function to create Hotel. */
exports.create = (req, res) => {
  const newHotel = new Hotel(req.body);
    newHotel.save((err, hotel) => {
      if (err){
        res.send(err);
      }
      res.json(hotel);
    });
};
/** getAll function to find Hotels  */
exports.getAll = ( req , res ) => {
  Hotel.find( {} , ( err , results ) => {
          if( err ){
            return res.send( err );
          }
          return res.json( results );
  });
};
/** getHotel function to get Hotel by id. */
exports.get = function (req, res) {
    Hotel.findOne({_id: req.params.id}, function(err, result) {
          if( err ){
            return res.send( err );
          }
          return res.json( result );
    });
};

/** updateHotel function to get Hotel by id. */
exports.update = function (req, res) {
    Hotel.update(req.params.id, req.body, function(err, result) {
            if( err ){
              return res.send( err );
            }
            return res.json( results );
    });
}

/** removeHotel function to get Hotel by id. */
exports.delete = function (req, res) {
    Hotel.remove({_id: req.params.id}, function(err, result) {
      if( err ){
        return res.send( err );
      }
      return res.json( results );
    });
}
