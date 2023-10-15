
export const queries = {
    getAllProducts: 'SELECT * FROM products',
    addNewProduct: 'INSERT INTO products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProductById: 'DELETE FROM Products WHERE Id = @Id',
    getProductCount: 'SELECT COUNT(*) FROM Products',
    updateProductById: 'UPDATE Products SET name = @name, description = @description, quantity = @quantity WHERE Id = @Id'
}