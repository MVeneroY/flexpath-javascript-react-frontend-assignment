// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { getdata } from "./services/fetchService";
import { useStats } from "./services/useStats";
import Table from "./Table";
import DataCart from "./DataCard";

const initialFilter = {
  filterType: "model",
  keyword: "",
};

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

let initialData = [];
try {
  initialData = JSON.parse(localStorage.getItem("data"));
  initialData = initialData || [];
} catch {
  console.error("Saved data could not be parsed into JSON.");
  initialData = [];
}

export default function Search() {
  const [filter, setFilter] = useState(initialFilter);
  const [formStatus, setFormStatus] = useState(STATUS.IDLE);
  const [data, setData] = useState(initialData);
  const [saveError, setSaveError] = useState(null);

  // Derived state
  const stats = useStats(data);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function handleChange(e) {
    e.persist();
    setFilter((currentFilter) => {
      return {
        ...currentFilter,
        [e.target.id]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus(STATUS.SUBMITTING);
    try {
      const res = await getdata(filter);
      const json = await res.json();
      //   console.log(json);
      setData(json);
      setFormStatus(STATUS.COMPLETED);
    } catch (e) {
      setSaveError(e);
    } finally {
      setFormStatus(STATUS.SUBMITTED);
      //   console.log(data);
    }
  }

  if (saveError) throw saveError;

  return (
    <>
      <div className="container-xxl">
        <form className="container-fluid left-align" onSubmit={handleSubmit}>
          <div className="row row-cols-1 w-25 my-2">
            <label className="row my-1" htmlFor="filterType">
              Select data point to filter search by
            </label>
            <br />
            <select
              id="filterType"
              className="col form-select my-1"
              value={filter.filterType}
              onChange={handleChange}
            >
              <option value="mode">model</option>
              <option value="gender">gender</option>
              <option value="operatingSystem">operatingSystem</option>
              <option value="behaviorClass">behaviorClass</option>
            </select>
          </div>

          <div className="row row-cols-1 w-25 my-2">
            <input
              className="col my-1"
              id="keyword"
              type="text"
              placeholder="Search by Keyword"
              value={filter.keyword}
              onChange={handleChange}
            ></input>
            <br />
            <input
              className="col my-1 btn btn-outline-secondary"
              type="submit"
              value="Search"
            />
            {data.length > 0 ?
              <p className="row ">Displaying {data.length} records</p>
            : <p className="row">No records to display</p>}
          </div>
          {formStatus === STATUS.SUBMITTING && <p>Loading...</p>}
        </form>

        <div className="row my-3">
          {Object.keys(stats).map((key) => (
            <div className="col" key={key}>
              <DataCart stats={stats} type={key} />
            </div>
          ))}
        </div>

        <Table data={data} />
      </div>
    </>
  );
}
