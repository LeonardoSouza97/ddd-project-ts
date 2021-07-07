module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
    {
      tableName: 'user',
      timestamps: true
    },
  );

  return User;
};
