import { useState } from "react";
import styles from "./EmailModal.module.css";
import Cookies from "js-cookie";

const EmailModal = () => {
    const [emailInput, setEmailInput] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (emailInput !== confirmEmail) {
            setError("Emails do not match");
            return;
        }

        // ✅ Save email in cookies
        Cookies.set("userEmail", emailInput, { expires: 7 }); // expires in 7 days
        console.log(Cookies.get("userEmail"))
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
                    className={styles.inputField}
                />
                <br />
                <input
                    type="email"
                    placeholder="Confirm Email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className={styles.inputField}
                />

                {error && <p className={styles.errorMessage}>{error}</p>}

                <button
                    onClick={handleSubmit}
                    className={styles.submitButton}
                    style={{ marginTop: "12px", cursor: "pointer" }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default EmailModal;
