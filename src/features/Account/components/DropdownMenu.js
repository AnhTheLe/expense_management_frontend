import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AuthContext } from 'AuthContext';
import { useContext } from 'react';

export default function DropdownMenu() {
  const { timeSearch, setTimeSearchFunc} = useContext(AuthContext);

  const handleChange = (event) => {
    setTimeSearchFunc(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120}} size="small">
      <InputLabel id="demo-select-small-label">Time</InputLabel>
      <Select
        sx={{ borderRadius: '50px', boxShadow: '0px 1px 12px 2px rgba(0, 0, 0, 0.25)', backgroundColor: '#FFFFFF' }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={timeSearch}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"Recently"}>Recently</MenuItem>
        <MenuItem value={"This Week"}>This Week</MenuItem>
        <MenuItem value={"This Month"}>This Month</MenuItem>
      </Select>
    </FormControl>
  );
}
