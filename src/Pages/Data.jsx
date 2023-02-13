import React from "react";
import Table from "react-bootstrap/Table";
import Sidebar from "../components/Sidebar";
import SearchBar from "./SearchBar";
import "./style.css";

const Data = () => {
  return (
    <>
      {/* <Sidebar />
      <SearchBar /> */}

      <div className=" table-responsive mx-2 table_container">
        <Table striped bordered hover className="table_container" >

          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
              <th>Position</th>
              <th>Dummy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>2</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>3</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>4</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>5</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>6</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>7</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>8</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>9</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>10</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>11</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>12</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
            <td>13</td>

              <td>Charde Marshall</td>
              <td>Regional Director</td>
              <td>San Francisco</td>
              <td>36</td>
              <td>2008-10-16</td>
              <td>$470,600</td>
              <td>Junior Javascript Developer</td>

            </tr>
            <tr>
              <td>14</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>15</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>$320,800</td>
              <td>System Architect</td>
              <td>System Architect</td>

            </tr>
          </tbody>
        
        </Table>
      </div>
    </>
  );
};

export default Data;
