module.exports = (sequelize,DataTypes) => {


    //Postschema
        const OderDetailsSchema = sequelize.define("OderDetails" , {   
    
            oderNo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"123",
            },
            itemNo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"123",
            },
            menuID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"123",
            },
            qty: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"1",
            },
            totPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue:"50.0",
            },

    
        });
    
        return OderDetailsSchema;
     };