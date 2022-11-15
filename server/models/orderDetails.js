module.exports = (sequelize,DataTypes) => {


    //Postschema
        const oderDetailsSchema = sequelize.define("orderDetails" , {   
    
            oderDetailsId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            orderId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                
                references: {
                    model: 'customer', // 'fathers' refers to table name
                    key: 'cusId', // 'id' refers to column name in fathers table
                 },
                //forign keyk
                defaultValue:123,
            },
            

            menuID: {
                type: DataTypes.INTEGER,
                references: {
                   model: 'menu', // 'fathers' refers to table name
                   key: 'menuID', // 'id' refers to column name in fathers table
                }},

            
            qty: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:1,
            },
            totPrice: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue:80,
            },

    
        },{
            freezeTableName: true,
            timestamps: false,

        });
        

        // menu.hasMany(OderDetails, {
        //     foreignKey: 'menuID'
        //   });


        // OderDetailsSchema.associate = (models) => {
        //     OderDetailsSchema.hasMany(models.OderSchema, {
        //         onDelete: "cascade,"
        //     })
        // }
        
    
        return oderDetailsSchema;
     };