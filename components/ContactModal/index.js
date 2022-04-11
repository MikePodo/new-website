import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

import styles from "./index.module.scss";

const ContactModal = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendDisabled, setSendDisabled] = useState(true);

  return (
    <Modal open={open} onClose={() => setOpen(false)} className={styles.screen}>
      <div className={styles.modalContainer}>
        <h1 className={styles.header}>Contact Me</h1>
        <div className={styles.inputsHeaderContainer}>
          <TextInput
            label="Full Name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <TextInput
            label="Email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </div>
        <TextInput
          label="Subject"
          classNames={[styles.subjectInput]}
          value={subject}
          onChange={({ target: { value } }) => setSubject(value)}
        />
        <TextInput
          label="Message"
          multiline
          classNames={[styles.messageInput]}
          rows={6}
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <div className={styles.sendContainer}>
          <Button
            variant="outlined"
            className={styles.sendButton}
            disabled={sendDisabled}
          >
            Send
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
