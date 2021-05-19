'use strict';
module.exports = (sequelize, DataTypes) => {
	const Topic = sequelize.define('Topic', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at',
		tableName: 'topics',
		timestamps: true,
		paranoid: true,
		underscored: true
	});
	Topic.associate = function (models) {
		// associations can be defined here
	};
	return Topic;
};
