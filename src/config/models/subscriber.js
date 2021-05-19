'use strict';
module.exports = (sequelize, DataTypes) => {
	const Subscriber = sequelize.define('Subscriber', {
		topic: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
	}, {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at',
		tableName: 'subscribers',
		timestamps: true,
		paranoid: true,
		underscored: true
	});
	Subscriber.associate = function (models) {
		// associations can be defined here
	};
	return Subscriber;
};
