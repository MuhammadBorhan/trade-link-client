import "./App.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)

  useEffect(() => {
    const keywords = searchTerm.split(" ").map((term) => term.toLowerCase());

    const filteredProducts = products.filter((product) =>
      keywords.every((keyword) => product.title.toLowerCase().includes(keyword))
    );

    setSearchResults(filteredProducts);
  }, [searchTerm, products]);

  const customFilter = (option, inputValue) => {
    const keywords = inputValue.toLowerCase().split(" ");

    return keywords.every((keyword) => option.toLowerCase().includes(keyword));
  };

  return (
    <div className="">
      <div className="lg:w-[500px] m-4">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={products?.map((option) => option.title)}
          value={searchTerm}
          onInputChange={(_, newValue) => setSearchTerm(newValue)}
          filterOptions={(options, state) => {
            return options.filter((option) =>
              customFilter(option, state.inputValue)
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </div>
      <div className="p-2 lg:p-12">
        {/* <input
          type="text"
          placeholder="Enter search terms"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-black m-2 focus:outline-none h-8 p-1"
        /> */}
        <table className="mx-auto min-w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 w-16 text-center">
                Sl No.s
              </th>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Year</th>
            </tr>
          </thead>
          <tbody>
            {searchResults?.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <span className=""> {data?.title}</span>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {data?.year}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

const products = [
  { title: "AC AIR FILTER 17804 22020 G-COROLLA-ZZ 122-MALVO", year: 1994 },
  { title: "AC AIR FILTER 17804 22021 G-COROLLA-ZZ 122-HONDA", year: 1994 },
  { title: "AC AIR FILTER 17804 22021 G-COROLLA-ZZ 122-SUZUKI", year: 1994 },
  { title: "AC AIR FILTER 17804 22022 G-COROLLA-ZZ 122-TOYOTA", year: 1994 },
  { title: "Hanger-Bose-1780 22020 G-COROLLA-ZZ 122-MALVO", year: 1994 },
  { title: "Hanger-Bose-1780 22020 G-COROLLA-ZZ 122-TOYOTA", year: 1994 },
  { title: "AIR FILTER 1782 22022 G-COROLLA-ZZ 122-FZ-5", year: 1994 },
  { title: "AIR FILTER 1782 22023 G-COROLLA-ZZ 122-MALVO", year: 1994 },
  { title: "AIR FILTER 1782 22022 G-COROLLA-ZZ 122-R15", year: 1994 },
  { title: "AIR FILTER 1782 22024 G-COROLLA-ZZ 122-SUZUKI", year: 1994 },
  { title: "AIR FILTER 1782 22022 G-COROLLA-ZZ-122-HONDA", year: 1994 },
  { title: "Hanger Bose 1780 22020 G-COROLLA-ZZ 122-MITSUBISI", year: 1994 },
  { title: "Hanger Bose 1782 22020 G-COROLLA-ZZ 122-HONDA", year: 1994 },
  { title: "Hanger Bose 1783 22020 G-COROLLA-ZZ 122-SUZUKI", year: 1994 },
];
