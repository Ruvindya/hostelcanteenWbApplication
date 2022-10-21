module.exports = (sequelize,DataTypes) => {


    //Postschema
        const OderSchema = sequelize.define("Oder" , {   
    
            oderNo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"123",
            },
            BLD: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue:"B",
            },
            cusId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"123",
            },
           
            totAmount: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue:"50.0",
            },

    
        });
    
        return OderSchema;
     };