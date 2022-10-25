module.exports = (sequelize,DataTypes) => {


    //Postschema
        const StatusSchema = sequelize.define("status" , {   
    
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
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
                defaultValue:"T",
            },
           

    
        },{
            freezeTableName: true,
            timestamps: false,
            
            
        });
    
        return StatusSchema;
     };