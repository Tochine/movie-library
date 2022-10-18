'use strict';

module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define("movie", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type:DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }

  }, {});
  movie.associate = function (models) {
    movie.hasMany(models["actor"], {
      as: 'movies',
      foreignKey: "movie_id"
    });
    movie.belongsTo(models["category"], {
      as: "category",
      foreignKey: "category_id"
    });
  };
  return category;
}