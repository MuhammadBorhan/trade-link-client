import logo from "./logo.svg";
import "./App.css";
import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function App() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);
  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const [inputValue, setInputValue] = useState("");
  const [auto, setAuto] = useState(null);

  const [dealers, setDealers] = useState([]);
  useEffect(() => {
    fetch("https://pixelgraphicsbd.com/api/dealers")
      .then((res) => res.json())
      .then((data) => setDealers(data?.dealer));
  }, []);

  const filteredOptions = dealers?.filter((dealer) =>
    dealer.d_name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className="App">
      <div className="flex gap-1 flex-col justify-center lg:w-[500px] mx-auto">
        <label className="">Search</label>
        <Autocomplete
          id="asynchronous-demo"
          sx={{ width: 600 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search..."
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </div>
      <div className="p-2 lg:p-12">
        <table>
          <thead>
            <tr>
              <th className="border border-gray-400 w-16 text-center">
                Sl No.
              </th>
              <th className="border border-gray-400 px-4 py-2">Client</th>
              <th className="border border-gray-400 px-4 py-2">Mobile</th>

              <th className="border border-gray-400 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {dealers?.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <span className=""> {data?.d_name}</span>
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {data?.d_mobile}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {data?.d_email}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        {/* <Autocomplete
          id="asynchronous-demo"
          value={auto}
          onChange={(event, newValue) => {
            setAuto(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={filteredOptions}
          size="small"
          className=" bg-[#e7e4e4]  "
          renderInput={(params) => (
            <TextField {...params} placeholder="Select Client" />
          )}
          getOptionLabel={(option) => option.d_name}
          getOptionSelected={(option, value) => option?.id === value}
        /> */}
      </div>
    </div>
  );
}

export default App;

const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Hanger-Bose-1780-22020-G-COROLLA-ZZ-122-MALVO", year: 1994 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Hanger-Bose-1780-22020-G-COROLLA-ZZ-122-TOYOTA", year: 1994 },
  { title: "AIR-FILTER-1782-22022-G-COROLLA-ZZ-122-FZ-5", year: 1994 },
  { title: "AIR-FILTER-1782-22022-G-COROLLA-ZZ-122-MALVO", year: 1994 },
  { title: "AIR-FILTER-1782-22022-G-COROLLA-ZZ-122-R15", year: 1994 },
  { title: "AIR-FILTER-1782-22022-G-COROLLA-ZZ-122-SUZUKI", year: 1994 },
  { title: "Hanger-Bose-1780-22020-G-COROLLA-ZZ-122-MITSUBISI", year: 1994 },
  { title: "Hanger-Bose-1780-22020-G-COROLLA-ZZ-122-HONDA", year: 1994 },
  { title: "Hanger-Bose-1780-22020-G-COROLLA-ZZ-122-SUZUKI", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "AIR-FILTER-1782-22022-G-COROLLA-ZZ-122-HONDA", year: 1994 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "AIR-FILTER-1782-22022-G-COROLLA-ZZ-122-MITSUBISI", year: 1994 },
];
