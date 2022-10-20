module.exports = (sequelize,DataTypes) => {

    //Postschema
        const LoginSchema = sequelize.define("user" , {  
            
            userId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue:"123",
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
        });
    
        return LoginSchema;
     };
