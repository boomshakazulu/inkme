const Booking = require("../models/Booking");
const User = require("../models/User");

module.exports = {
  Query: {
    getBookings: async (_, { artistId }) => {
      return await Booking.find({ artistId });
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createBooking: async (_, args) => {
      const booking = new Booking(args);
      return await booking.save();
    },
  },
};
