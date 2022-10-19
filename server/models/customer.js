module.exports = (sequelize,DataTypes) => {


    //Postschema
        const LoginSchema = sequelize.define("customer" , {   
    
            cusId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"123",
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
                defaultValue:"RoomNo",
            },
            phoneNo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:"PhoneNo",
            },

    
        });
    
        return LoginSchema;
     };