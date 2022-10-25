module.exports = (sequelize,DataTypes) => {

    //Postschema
        const UserSchema = sequelize.define("user" , {  
            
             userId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                primaryKey: true,
                autoIncrement: true,
             },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue:"EXname",
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue:"EXEmail",
            },
    
            userName: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue:"EXUserName",
            },

            password: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue:"******",
            },
        },{
            freezeTableName: true,
            timestamps: false,
            
            
        });
       
    
        return UserSchema;
     };
