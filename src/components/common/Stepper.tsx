import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";

interface IStepperProps {
    totalSteps: Number;
    currentStep: Number;
    basePathSteps: string;
    containerStyles?: string
}

export const Stepper = ({totalSteps, currentStep, basePathSteps, containerStyles = ''}: IStepperProps) => {
    const styleClass = useInternalStyles();

    const history = useHistory();

    const redirectToForm = (formNumber: Number) => {
        history.push(`${basePathSteps}${formNumber}`)
    }

    return (
        <div className={containerStyles}>
            <div className={styleClass.stepperContainer}>
                <hr className={styleClass.line}/>
                {(() => {
                    const steps = [];
                    for (let i = 1; i <= totalSteps; i++) {
                        if (i === currentStep) {
                            steps.push(<div className={styleClass.currentStep}>{i}</div>);
                        } else {
                            steps.push(<div onClick={() => redirectToForm(i)} className={styleClass.step}>{i}</div>);
                        }
                    }
                    return steps;
                })()}
            </div>
        </div>

    )
}

const useInternalStyles = makeStyles(() => ({
    stepperContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
    },
    step: {
        backgroundColor: "#52BCEC",
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "25px",
        width: "25px",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#094FA4",
        }
    },
    currentStep: {
        backgroundColor: "#094FA4",
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "25px",
        width: "25px"
    },
    line: {
        position: "absolute",
        top: "50%",
        width: "95%",
        zIndex: -1,
        background: "#094FA4",
        border: "1px solid #094FA4"
    }
}));

