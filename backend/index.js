const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "vehicle",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM vehicle");
    connection.release();
    res.json({success: true, data: rows});
  } catch (error) {
    console.error(error);
    res.status(500).send({success: false, message: "Internal Server Error"});
  }
});

app.post("/create", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO vehicle (username,address,contact,email,nic,date) VALUES (?, ?, ?, ?, ?, ?)",
      [req.body.username, req.body.address, req.body.contact, req.body.email,req.body.nic,req.body.date]
    );
    connection.release();
    res.send({success: true, message: "Data created successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).send({success: false, message: "Internal Server Error"});
  }
});

// Update a catering event
app.put("/update", async (req, res) => {
  try {
    const {id, ...rest} = req.body;
    await pool.query("UPDATE vehicle SET ? WHERE id = ?", [rest, id]);
    res.send({success: true, message: "Updated successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).send({success: false, message: "Internal Server Error"});
  }
});

// Delete a catering event
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await pool.query("DELETE FROM vehicle WHERE id = ?", [id]);

    console.log("Deleted successfully $id");
    res.send({success: true, message: "Deleted successfully $id"});
  } catch (error) {
    console.error(error);
    res.status(500).send({success: false, message: "Internal Server Error"});
  }
});

// Get catering event by ID
app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query("SELECT * FROM vehicle WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      res.status(404).send({success: false, message: "User not found"});
    } else {
      res.send({
        success: true,
        message: "User fetched successfully",
        data: rows[0],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({success: false, message: "Internal Server Error"});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
