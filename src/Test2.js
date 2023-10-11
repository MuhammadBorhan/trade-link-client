import "./App.css";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(selectedProduct)

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
          options={products?.map((option) => option?.title)}
          value={searchTerm}
          onInputChange={(_, newValue) => setSearchTerm(newValue)}
          filterOptions={(options, state) => {
            return options.filter((option) =>
              customFilter(option, state.inputValue)
            );
          }}
          onChange={(_, newValue) => {
            setSelectedProduct(
              products?.find((product) => product.title === newValue)
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
      {selectedProduct && (
        <div>
          <h3>Selected Product:</h3>
          <p>{selectedProduct.title}</p>
        </div>
      )}
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
