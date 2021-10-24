import {useState} from "react";
import {makeStyles} from "@mui/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ISelectOptionProps {
    values: string[];
    onChange: (value: string) => void;
    fieldName: string;
    label: string;
    value: string;
    containerStyles?: string;
    placeHolder?: string;
}

export const SelectOption = ({
                                 values,
                                 fieldName,
                                 value,
                                 onChange,
                                 label,
                                 containerStyles = "",
                                 placeHolder
                             }: ISelectOptionProps) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const styles = useSelectStyle();
    const styleClass = styles;

    return (
        <div className={`${styles.selectContainer} ${containerStyles}`}>
            <label className={styles.label} htmlFor={fieldName}>
                {label}
            </label>

            <Select
                className={styles.select}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                displayEmpty
                labelId="select-label"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                IconComponent={() => (
                    <div className={styles.iconContainer} onClick={handleOpen}>
                        <KeyboardArrowDownIcon fontSize="large"/>
                    </div>
                )}
                renderValue={
                    value !== "" ? undefined : () => <div className={styles.placeHolder}>{placeHolder}</div>
                }
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
    placeHolder: {
        color: "#7a889c !important",
        paddingLeft: "5px"
    },
    select: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        color: "#072146 !important",
        fontSize: "18px !important",
        border: "1px solid #F0F1F2 !important",
        paddingLeft: "5px"
    },
    iconContainer: {
        marginTop: "-5px",
        width: "55px",
        height: "60px",
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
