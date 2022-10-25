module.exports = (sequelize,DataTypes) => {


    //Postschema
        const CustomerSchema = sequelize.define("customer" , {   
    
            cusId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue:"EXcus",
            },
            block: {
                type: DataTypes.CHAR,
                allowNull: false,
                defaultValue:"BlockNo",
            },
            roomNo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:012,
            },
            phoneNo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:123456,
            },

    
        },{
            freezeTableName: true,
            timestamps: false,
            
            
        });

        //  order.belongsTo(customer);

         return CustomerSchema;
     };