

module.exports = (sequelize,DataTypes) => {


    
        const customerbillSchema = sequelize.define("customerBill" ,{   
    
            billId: {
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
           
            totAmount: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue:"50.0",
            },

    
        },{
            freezeTableName: true,
            timestamps: false,
  
        });


        // customer.hasMany(order, {
        //     foreignKey: 'cusId'
        //   });
          


        // OderSchema.associate = (models) => {
        //     OderSchema.hasMany(models.OderDetailsSchema, {
        //         onDelete: "cascade,"
        //     })
        // };
        // Oder.belongsTo(customer);

        return customerbillSchema;
     };