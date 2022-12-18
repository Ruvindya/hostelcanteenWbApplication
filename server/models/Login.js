module.exports = (sequelize,DataTypes) => {

        const LoginSchema = sequelize.define("Login" , {  

            
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },

        },{
            freezeTableName: true,
            timestamps: false,
            
            
        });
    
        return LoginSchema;
     };