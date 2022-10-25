module.exports = (sequelize,DataTypes) => {


    //Postschema
        const MenuSchema = sequelize.define("menu" , {   
    
            menuID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            BLD: {
                type: DataTypes.STRING,
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
                defaultValue:80.0,
            },
            isAvailabe: {
                
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue:true,
            },

    
        },{
            freezeTableName: true,
            timestamps: false,
            
            
        });
    
        // OderDetails.belongsTo(menu);

        return MenuSchema;
     };