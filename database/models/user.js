module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      pk_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "유저 고유 ID",
      },
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "유저 ID",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "유저 패스워드",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "유저 이메일",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.fn("NOW"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.fn("NOW"),
      },
    },
    {
      tableName: "user",
      underscored: true,
      freezeTableName: true,
      timestamps: true,
    }
  );

  return user;
};
