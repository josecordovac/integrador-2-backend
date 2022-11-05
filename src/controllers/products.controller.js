import { getConnection, sql, querys } from "../datebase";

export const getData = async (req, res) => {
  try {
    const pool = await getConnection();
    const { queryId } = req.body;

    const resultQuery = await pool.request()
    .input("sql_id", sql.Int, queryId)
    .query(querys.getQuery);

    const result = await pool.request()
    .execute(resultQuery.recordset[0].SQL_QUERY)

    res.status(200).json({dataList: result.recordset, ok: true});
  } catch (error) {
    res.status(500);
  }
};

export const getProyects = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json({ mensaje: "proyectos", resultados: result });
  } catch (error) {
    res.status(500).json({ok: false, error});
  }
};

export const createNewProyect = async (req, res) => {
  try {
    // const { name, description } = req.body;
    // let { quantity } = req.body;

    // if (name == null || description == null) {
    //   return res.status(400).json({ msg: "LLenar todos los campos" });
    // }

    // if (quantity == null) quantity = 0;

    // const pool = await getConnection();
    // await pool
    //   .request()
    //   .input("name", sql.VarChar, name)
    //   .input("description", sql.Text, description)
    //   .input("quantity", sql.Int, quantity)
    //   .query(querys.addNewProduct);

    // res.json({ name, description, quantity })
    // [`[${informacion}]`]
    const data = req.body
    const pool = await getConnection();
    await pool
      .request()
      .input("params", JSON.stringify(data))
      // .execute("sp_new_proyect", function(err, recordsets, returnValue){

      // });

    // res.json({ mensaje: "creados", body: req.body });
    res.send(req.body);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  // const pool = await getConecction();
};

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalProducts = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalProducts);
  console.log(result);
  let valor = result.recordset[0][""];
  res.json(valor);
};

export const updateProductById = async (req, res) => {
  const { description, name, quantity } = req.body;

  // validating
  if (description == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .input("id", req.params.id)
      .query(querys.updateProductById);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
