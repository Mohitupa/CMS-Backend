import Sequelize from "sequelize";
import sequelize from "./../core/sequelize";

const patient_visits = sequelize.define("patient_visits",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true,
    },
    patient_id: {
        type: Sequelize.INTEGER,
        allowNull : false,
    },
    registration_no: {
        type: Sequelize.INTEGER,
        allowNull : false,
    },
    visit_date: {
        type: Sequelize.STRING,
        allowNull : false,
    },
},{
    timestamps: false
});

export default patient_visits;
