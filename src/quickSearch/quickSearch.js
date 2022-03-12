import { InputAdornment, FilledInput, FormControl } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import SearchIcon from "@material-ui/icons/Search";
import DisplayImages from "./images/display-images";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    margin: '3% auto'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },

}));

const QuickSearch = (props) => {
  const [search, setSearchText] = useState("");
  const [data, setData] = useState(
    [
      { id: 1, src: '/images/image1.png' },
      { id: 2, src: '/images/luggage-tags.png' },
      { id: 3, src: '/images/image3.png' },
      { id: 4, src: '/images/luggage-tags.png' },
      { id: 5, src: '/images/image5.png' },
      { id: 6, src: '/images/image6.png' }
  ]
  );
  const classes = useStyles();

  const searchTextData = async () => {
    const searchedData = await fetch("");
    setData(searchedData);
  };

  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
      >
        <FilledInput
          id="filled-adornment-weight"
          placeholder="Search Text"
          value={search}
          onChange={(e) => setSearchText(e.target.value)}
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon onClick={searchTextData} />
            </InputAdornment>
          }
          aria-describedby="filled-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
      <DisplayImages data={data} />
    </div>
  );
};

export default QuickSearch;
