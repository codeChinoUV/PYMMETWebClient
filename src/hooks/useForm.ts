import {useState} from "react";

export const useForm = <T extends Object>(form: T) => {
    const [state, setState] = useState(form);

    const onChange = (value: any, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        });
    };

    return {
        ...state,
        form: state,
        onChange,
        setState
    }
}
