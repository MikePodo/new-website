import React, { useState, useRef } from "react";
import getConfig from "next/config";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { object, string } from "yup";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";

import styles from "./index.module.scss";

const TextInput = ({ label, classNames = [], ...props }) => (
  <TextField
    id="standard-basic"
    label={label}
    variant="standard"
    className={[styles.input, ...classNames].join(" ")}
    InputLabelProps={{
      className: styles.inputLabel,
    }}
    FormHelperTextProps={{
      className: styles.inputHelperText,
    }}
    {...props}
  />
);

const ContactModal = ({ open, setOpen }) => {
  const [toast, setToast] = useState({});

  const formRef = useRef(null);

  const { publicRuntimeConfig } = getConfig();

  let formSchema = object({
    name: string().required("Please enter your name"),
    email: string()
      .email("Please enter a valid email address")
      .required("Please enter an email address"),
    subject: string().required("Please enter a subject"),
    message: string().required("Please enter a message"),
  });

  const handleEmailSubmit = async (values, { setSubmitting }) => {
    try {
      await emailjs.send(
        publicRuntimeConfig.emailServiceKey,
        publicRuntimeConfig.emailTemplateKey,
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        publicRuntimeConfig.emailPublicKey
      );
      setToast({
        severity: "success",
        message: "Thanks for messaging! Expect a response shortly.",
      });
    } catch (e) {
      console.log("Error sending email: ", e);
      setToast({
        severity: "error",
        message: "There was an issue sending your message. Please try again.",
      });
    }

    setSubmitting(false);
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={Object.keys(toast).length > 0}
        onClose={() => setToast({})}
        TransitionComponent={Slide}
        autoHideDuration={4000}
      >
        <Alert
          onClose={() => {
            setToast({});
          }}
          severity={toast.severity}
          color={toast.severity === "success" ? "primary" : "error"}
          className={styles.alert}
        >
          {toast.message}
        </Alert>
      </Snackbar>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={styles.screen}
      >
        <div className={styles.modalContainer}>
          <h1 className={styles.header}>Contact Me</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={formSchema}
            onSubmit={handleEmailSubmit}
          >
            {({ submitForm, isSubmitting }) => (
              <Form ref={formRef}>
                <Backdrop open={isSubmitting}>
                  <CircularProgress />
                </Backdrop>
                <div className={styles.inputsHeaderContainer}>
                  <Field component={TextInput} name="name" label="Full Name" />
                  <Field
                    component={TextInput}
                    name="email"
                    type="email"
                    label="Email"
                  />
                </div>
                <Field
                  component={TextInput}
                  name="subject"
                  label="Subject"
                  classNames={[styles.subjectInput]}
                />

                <Field
                  component={TextInput}
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  classNames={[styles.messageInput]}
                />
                <div className={styles.sendContainer}>
                  <Button
                    variant="outlined"
                    className={styles.sendButton}
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Send
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default ContactModal;
