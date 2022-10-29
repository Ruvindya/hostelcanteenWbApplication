module.exports = (sequelize,DataTypes) => {

    //Postschema
        const StatusSchema = sequelize.define("showstatus" , {   
    
            statusId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue:"pending",
            },
            BLD: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue:"EXcus",
            },
            TF: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue:"TRUE",
            },

        },{
            freezeTableName: true,
            timestamps: false,    
        });
    
        return StatusSchema;
     };