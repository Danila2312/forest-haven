const sequelize = require('../db')
const {DataTypes}  = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: {type: DataTypes.STRING, unique:true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue:"USER"}
})

const Booking = sequelize.define('booking', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: {type: DataTypes.INTEGER, primaryKey: true,},
  start_book: {type: DataTypes.DATE },
  end_book: {type: DataTypes.DATE },
})

const House = sequelize.define('house', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  img: {type: DataTypes.STRING, unique:true},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, allowNull: false} ,
  review: {type: DataTypes.STRING, allowNull: false} ,
} )

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: {type: DataTypes.INTEGER, primaryKey: true,  },
  house_id: {type: DataTypes.INTEGER, primaryKey: true, },
  rating: {type: DataTypes.INTEGER, allowNull: false} ,
})

User.hasOne(Booking)
Booking.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

House.hasMany(Booking)
Booking.belongsTo(House)

House.hasMany(Rating)
Rating.belongsTo(House)

module.exports = {
  User,
  House,
  Booking,
  Rating
}