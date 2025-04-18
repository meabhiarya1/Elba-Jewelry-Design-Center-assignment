import { useState } from "react";
import styles from "./EmailModal.module.css";
import { useEmail } from "../context/EmailContext";

const EmailModal = () => {
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
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Enter Your Email</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className={styles.inputField} // Updated to use the new class
                />
                <br />
                <input
                    type="email"
                    placeholder="Confirm Email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className={styles.inputField} // Updated to use the new class
                />

                {error && <p className={styles.errorMessage}>{error}</p>} {/* Applied errorMessage styling */}

                <button
                    onClick={handleSubmit}
                    className={styles.submitButton} // Use submitButton class for styling
                    style={{ marginTop: "12px", cursor: "pointer" }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default EmailModal;
