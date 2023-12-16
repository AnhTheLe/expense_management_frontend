import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownMenu(props) {
  const { categories, onChange, categorySelected } = props;


  return (
    <FormControl sx={{ m: 1, minWidth: 120}} size="small" fullWidth>
      <InputLabel id="demo-select-small-label">Categories</InputLabel>
      <Select
        sx={{ borderRadius: '50px', backgroundColor: '#FFFFFF' }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={categorySelected}
        label="List categories"
        onChange={(e) => onChange(e.target.value)}
      >
        {categories.map((category, index) => (
          <MenuItem key={index} value={category.id}>{category.categoryName}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
