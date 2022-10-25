const customer = require("./customer");
const orderDetails = require("./orderDetails");

module.exports = (sequelize,DataTypes) => {


    //Postschema
        const OderSchema = sequelize.define("Order" , {   
    //
            oderNo: {
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

            cusId: {
                type: DataTypes.INTEGER,
                references: {
                   model: 'customer', // 'fathers' refers to table name
                   key: 'cusId', // 'id' refers to column name in fathers table
                }},
            // cusId: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            //     //foreign key
            //     defaultValue:"123",
            // },
           
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

        return OderSchema;
     };