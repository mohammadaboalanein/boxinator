import React, { useMemo, useState, useEffect } from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import Backend from "../backend/Backend"
import Axios from "axios";

function ListBoxes() {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(() => [
    {
      Header: "Receiver",
      accessor: "receiver",
    },
    {
      Header: "Weight",
      accessor: "weight",
    },
    {
      Header: "Box Colour",
      accessor: "color",
      Cell: row => {
        row.styles['backgroundColor'] = row.value;
        return "";
      }
    },
    {
      Header: "Shipping cost",
      accessor: "cost",
    }
  ]);
  const cost = {
    "Sweden": 1.3,
    "China": 4,
    "Brazil": 8.6,
    "Australia": 7.4
  };

  const spainSymbol = {
    "Sweden": "SEK",
    "China": "CNY",
    "Brazil": "BRL",
    "Australia": "AUD"
  };
  const [data, setData] = useState([]);

  

  useEffect(() => {
    async function getData() {
      await Axios
        .get("http://localhost:3001/getboxes")
        .then((response) => {
          var list = [];
          response.data.forEach((element) => {
            list.push(
              {
                id: element.id,
                receiver: element.name,
                weight: element.weight + " kilograms",
                color: new Backend().rgbToHex(element.color),
                cost: element.weight * cost[element.country]
                  + " " + spainSymbol[element.country]
              }
            );
          })
          console.log(response.data);
          setData(list);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);



  return (
    <div className="App">
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <ReactTable className="ReactTable"
          data={data}
          columns={columns}
        />
      )}
    </div>
  );
}

export default ListBoxes;

