import { MAX, NVarChar } from "mssql";
import { getConnection, sql, querys } from "../datebase";

export const getData = async (req, res) => {
  try {
    const pool = await getConnection();
    const { queryId } = req.body;

    const resultQuery = await pool.request()
      .input("sql_id", sql.Int, queryId)
      .query(querys.getQuery);

    // const result = await pool.request()
    // .execute(resultQuery.recordset[0].SQL_QUERY)
    // res.status(200).json({dataList: result.recordset, ok: true});

    const {recordset} = await pool.request()
      .execute(resultQuery.recordset[0].SQL_QUERY)

    let results = {
      dataList: recordset ? recordset : [],
      dataObject: [],
      message: "",
      ok: true,
      err: '',
      Total: 0,
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500);
  }
};

export const saveData = async (req, res) => {
  try {
    const pool = await getConnection();
    const { queryId, params } = req.body;

    const resultQuery = await pool.request()
    .input("sql_id", sql.Int, queryId)
    .query(querys.getQuery);

    const { output, recordset} = await pool.request()
    .input("PARAMS", JSON.stringify(params))
    .output("OUT_PARAMS", NVarChar(MAX))
    .execute(resultQuery.recordset[0].SQL_QUERY)

    let { dataObject, message, Total } = output.OUT_PARAMS ? JSON.parse(output.OUT_PARAMS) : {dataObject: [], message: "", Total: 0};

    let results = {
      dataList: recordset ? recordset : [],
      dataObject: dataObject ? dataObject : [],
      message: message ? message : "",
      ok: true,
      err: '',
      total: Total || 0,
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500);
  }
};
