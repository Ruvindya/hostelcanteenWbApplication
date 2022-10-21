module.exports = (sequelize,DataTypes) => {


    //Postschema
        const MenuSchema = sequelize.define("menu" , {   
    
            menuID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"1",
            },
            BLD: {
                type: DataTypes.CHAR,
                allowNull: false,
                defaultValue:"B",
            },
            itemName: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue:"String Hoppers",
            },
            price: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue:"80.0",
            },
            isAvailabe: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue:true,
            },

    
        });
    
        return MenuSchema;
     };