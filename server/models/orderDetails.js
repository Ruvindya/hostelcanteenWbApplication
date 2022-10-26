module.exports = (sequelize,DataTypes) => {


    //Postschema
        const oderDetailsSchema = sequelize.define("oderDetails" , {   
    
            orderId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                
                references: {
                    model: 'order', // 'fathers' refers to table name
                    key: 'oderNo', // 'id' refers to column name in fathers table
                 },
                //forign keyk
                defaultValue:"123",
            },
            oderDetailsId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                
                autoIncrement: true,
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
                defaultValue:"1",
            },
            totPrice: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue:"50.0",
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