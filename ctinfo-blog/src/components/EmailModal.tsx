import React, { useState } from "react";
import styles from "./BlogModal.module.css";
import closeButton from "../assets/close-icon.png";
import { useEmail } from "../context/EmailContext";

type EmailModalProps = {
    onClose: () => void;
};

const EmailModal: React.FC<EmailModalProps> = ({ onClose }) => {
    const { setEmail } = useEmail();
    const [emailInput, setEmailInput] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (emailInput !== confirmEmail) {
            setError("Emails do not match");
            return;
        }
        setEmail(emailInput);
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={styles.closeButton}>
                    <img src={closeButton} alt="Close" className={styles.closeIcon} />
                </button>

                <h2 className={styles.title}>Enter Your Email</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className={styles.description}
                />
                <br />
                <input
                    type="email"
                    placeholder="Confirm Email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className={styles.description}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button onClick={handleSubmit} className={styles.title} style={{ marginTop: "12px", cursor: "pointer" }}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default EmailModal;
