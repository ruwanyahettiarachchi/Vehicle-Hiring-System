import {useEffect, useState, useRef} from "react";
import axios from "axios";
import {useReactToPrint} from "react-to-print";
import "./servicedetails.css";
import logo from './credit-cards-vs-debit-cards4.png'

function Servicedetails() {
  const componentPDF = useRef();
  const [showcustomer, setshowcustomer] = useState([]);
  const [searchkey, setsearchkey] = useState("");

  //read
  const getfetchdata = async () => {
    try {
      const data = await axios.get("http://localhost:8080/");
      console.log(data.data.success);
      if (data.data.success) {
        console.log(data.data.data);
        setshowcustomer(data.data.data);
      }
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getfetchdata();
  }, []);

  //delete
  const handledelete = async (id) => {
    console.log(id);
    const data = await axios.delete("http://localhost:8080/delete/" + id);
    if (data.data.success) {
      console.log(data.data.message);
      getfetchdata();
      console.log(data.data.message);
      alert(" deleted Successfully!");
    }
  };
  //generatePDF
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "show Payments ",
    onAfterPrint: () => alert("data save in pdf"),
  });
  //serach
  const handlesearch = (e) => {
    filterdata(searchkey);
  };
  const filterdata = (searchKey) => {
    const filteredData = showcustomer.filter((customer) =>
      customer.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setshowcustomer(filteredData);
  };

  return (
    <div className="showoservices">
      <img classNam="imgadd1"src={logo} alt="Logo" width="40%" height="45%"></img>
      <div className="searchbtn">
        <input
          type="search"
          onChange={(e) => setsearchkey(e.target.value)}
          placeholder="search"
          className="in"
        />{" "}
        <t></t>
        <button id="search-btn" onClick={(e) => handlesearch(e)}>
          {" "}
          search{" "}
        </button>
      </div>
      <div ref={componentPDF} style={{width: "100%"}}>
        <table>
          <tr>
            <th>User Name </th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Email</th>
            <th>Nic</th>
            <th>Date</th>

            <th>Action</th>
          </tr>

          <tbody>
            {showcustomer.map((e1) => {
              return (
                <tr>
                  <td> {e1.username}</td>
                  <td> {e1.address}</td>
                  <td> {e1.contact}</td>
                  <td> {e1.email}</td>
                  <td> {e1.nic}</td>
                  <td> {e1.date}</td>

                  <td className="dback">
                    <a href={`/update_service/${e1.id}`}>Edit Details</a>
                    <button onClick={() => handledelete(e1.id)}>Delete </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br></br>
      <button onClick={generatePDF}>Download Repoart</button>
    </div>
  );
}
export default Servicedetails;
