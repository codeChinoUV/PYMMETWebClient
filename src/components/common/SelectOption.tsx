import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ISelectOptionProps {
  values: string[];
  onChange: (value: string) => void;
  fieldName: string;
  label: string;
  value: string;
  containerStyles?: string;
}

export const SelectOption = ({
  values,
  fieldName,
  value,
  onChange,
  label,
  containerStyles = "",
}: ISelectOptionProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const styles = useSelectStyle();

  return (
    <div className={`${styles.selectContainer} ${containerStyles}`}>
      <label className={styles.label} htmlFor={fieldName}>
        {fieldName}
      </label>

      <Select
        className={styles.select}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        labelId="select-label"
        value={value}
        label="algo aqiu"
        onChange={(e) => onChange(e.target.value)}
        IconComponent={() => (
          <div className={styles.iconContainer} onClick={handleOpen}>
            <KeyboardArrowDownIcon fontSize="large" />
          </div>
        )}
      >
        {values.map((value, index) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

const useSelectStyle = makeStyles(() => ({
  selectContainer: {
    display: "flex",
    flexDirection: "column",
  },
  select: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  iconContainer: {
    marginTop: "-5px",
    width: "55px",
    height: "57px",
    boxShadow: "0px 3px 3px rgba(0, 0.25, 0, 0.25)",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  },
  label: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#072146",
    marginBottom: "10px",
  },
}));
