module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tp2', {
	    id: {
        type: DataTypes.INTEGER,
        primaryKey: true},
      idlikes: {
        type: DataTypes.INTEGER},
      commentaire: {
        type: DataTypes.STRING},
      image: {
        type: DataTypes.STRING},
      content: {
        type: DataTypes.STRING},
    },
    { freezeTableName: true , timestamps: false})
}