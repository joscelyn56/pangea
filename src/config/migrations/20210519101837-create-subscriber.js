'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('subscribers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			topic: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			url: {
				type: Sequelize.STRING,
				allowNull: false
			},
			active: {
				type: Sequelize.BOOLEAN,
				defaultValue: true
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('subscribers');
	}
};
