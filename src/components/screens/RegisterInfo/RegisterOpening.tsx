import React from "react";
import { makeStyles } from "@mui/styles";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export const RegisterOpening = () => {
  const styleClasses = useInternalStyles();

  return (
    <div className={styleClasses.container}>
      <p className={styleClasses.textP}>REGISTRO PYMES</p>
      <img
        className={styleClasses.imgContainer}
        src="/assets/PersonalFiles.png"
        alt=""
      />
      <h2 className={styleClasses.title}>Requisitos de apertura</h2>
      <div className={styleClasses.containerCheck}>
        <div className={styleClasses.textContainer}>
          <CheckCircleOutlineOutlinedIcon className={styleClasses.icon} />
          <p className={styleClasses.textInfo}>
            Comprobante de domicilio de tu empresa
          </p>
        </div>
        <div className={styleClasses.textContainer}>
          <CheckCircleOutlineOutlinedIcon className={styleClasses.icon} />
          <p className={styleClasses.textInfo}>
            Constancia de firma electrónica
          </p>
        </div>
        <div className={styleClasses.textContainer}>
          <CheckCircleOutlineOutlinedIcon className={styleClasses.icon} />
          <p className={styleClasses.textInfo}>Identificación oficial</p>
        </div>
        <div className={styleClasses.textContainer}>
          <CheckCircleOutlineOutlinedIcon className={styleClasses.icon} />
          <p className={styleClasses.textInfo}>
            Comprobante oficial de tu empresa
          </p>
        </div>
      </div>
      <button className={styleClasses.nextButton}>¡REGISTARME YA!</button>
    </div>
  );
};

const useInternalStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#094FA4",
    flexDirection: "column",
  },
  textP: {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "200px",
  },
  title: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "30px",
  },
  containerCheck: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "justify",
    width: "52%",
  },
  icon: {
    color: "white",
    fontSize: "30px",
    marginRight: "1rem",
    fontWeight: "bold",
  },
  textInfo: {
    color: "white",
    fontSize: "16px",
    marginRight: "1rem",
    marginBottom: "1rem",
  },
  nextButton: {
    marginTop: "30px",
    marginLeft: "15px",
    background: "#072146",
    border: "2px solid #072146",
    boxSizing: "border-box",
    borderRadius: "6px",
    padding: "19px 40px",
    fontWeight: 900,
    fontSize: "14px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "white",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
}));
