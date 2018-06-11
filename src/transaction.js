const Utils = require('./utils');


class Transaction {
	constructor(sequelize, options) {
		this.sequelize = sequelize;
	}

	commit() {

		if (this.finished) {
			return Utils.Promise.reject(new Error('Transaction cannot be committed because it has been finished with state: ' + this.finished));
		}

		return null
	}
}

module.exports = Transaction;
module.exports.Transaction = Transaction;
module.exports.default = Transaction;
