import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import style from "./translation.module.scss";
import './customSelect.scss'
import es from './img/spanish.png'
import en from './img/english.png'
import { useTranslation } from 'react-i18next'

export const Translation = () => {
  const [_, i18n] = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value as string)
  };
 


  return (
    <div className={style.translation}>
    <FormControl fullWidth >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={i18n.language}
        onChange={handleChange}
      >
        <MenuItem defaultChecked value={'es'}> <img src={es} alt='es'/> ES</MenuItem>
        <MenuItem value={'en'}> <img src={en} alt='es'/>  EN</MenuItem>
      </Select>
    </FormControl>
    </div>
  );
};
