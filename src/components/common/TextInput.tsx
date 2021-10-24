import {makeStyles} from "@mui/styles";

interface ITextInputProps {
    value: string;
    onChange:  (value: string) => void;
    fieldName: string;
    placeHolder?: string;
    isPassword?: boolean;
    containerStyles?: string,
}

export const TextInput = ({value, fieldName, onChange, isPassword = false,
                              placeHolder = '',
                              containerStyles = ''}: ITextInputProps) => {
    const styles = useInputStyle();

    return (
        <div className={containerStyles}>
            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor={fieldName}>{ fieldName }</label>
                <input className={styles.input}
                       id={fieldName}
                       name={fieldName}
                       placeholder={placeHolder}
                       type={(isPassword) ? 'password' : 'text'} value={value} onChange={(e) => onChange(e.target.value) }/>
            </div>
        </div>

    )
}


const useInputStyle = makeStyles(() => ({
    inputContainer: {
        display: "flex",
        flexDirection: "column"
    },
    label: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#072146",
        marginBottom: "10px"
    },
    input: {
        background: "#FFFFFF",
        border: "1px solid #F0F1F2",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        color: "#072146",
        fontSize: "18px",
        padding: "16px 12px 16px 25px"
    }
}));
