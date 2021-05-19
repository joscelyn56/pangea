'use strict';
module.exports = (sequelize, DataTypes) => {
	const Message = sequelize.define('Message', {
		topic: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at',
		tableName: 'messages',
		timestamps: true,
		paranoid: true,
		underscored: true
	});
	Message.associate = function (models) {
		// associations can be defined here
	};
	return Message;
};
