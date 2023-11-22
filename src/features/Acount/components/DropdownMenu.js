import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownMenu() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120}} size="small">
      <InputLabel id="demo-select-small-label">Time</InputLabel>
      <Select
        sx={{ borderRadius: '50px', boxShadow: '0px 1px 12px 2px rgba(0, 0, 0, 0.25)', backgroundColor: '#FFFFFF' }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={1}>Recently</MenuItem>
        <MenuItem value={2}>This Week</MenuItem>
        <MenuItem value={3}>This Month</MenuItem>
      </Select>
    </FormControl>
  );
}
