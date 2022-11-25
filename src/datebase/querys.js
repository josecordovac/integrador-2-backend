export const querys = {
  getQuery: "SELECT SQL_QUERY FROM FW_SQL WHERE SQL_ID = @sql_id",
  getAllProjects: "SELECT TOP(500) * FROM [programate].[dbo].[Proyecto]",
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Productos]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  addNewProyect: "sp_new_proyect",
};
