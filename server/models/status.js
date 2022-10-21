module.exports = (sequelize,DataTypes) => {


    //Postschema
        const StatusSchema = sequelize.define("status" , {   
    
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
                defaultValue:"T",
            },
           

    
        });
    
        return StatusSchema;
     };