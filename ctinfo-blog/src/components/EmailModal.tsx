import { useState } from "react";
import styles from "./EmailModal.module.css";
import Cookies from "js-cookie";

const EmailModal = () => {
    const [emailInput, setEmailInput] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!emailInput || !confirmEmail) {
            setError("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput) || !emailRegex.test(confirmEmail)) {
            setError("Please enter valid email addresses");
            return;
        }

        if (emailInput !== confirmEmail) {
            setError("Emails do not match");
            return;
        }

        // ✅ Save email in cookies
        Cookies.set("userEmail", emailInput, { expires: 7 }); // expires in 7 days
        console.log(Cookies.get("userEmail"));
        

        // Optionally clear error or form state
        setError("");
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Enter Your Email</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.container}>
                        <input type="email"
                            placeholder="Email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            required
                            className={styles.input} />
                    </div>
                    <br />
                    <div className={styles.container}>
                        <input type="email"
                            placeholder="Confirm Email"
                            value={confirmEmail}
                            required
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            className={styles.input} />
                    </div>
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    <button
                        className={styles.submitButton}
                        style={{ marginTop: "12px", cursor: "pointer" }}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmailModal;
