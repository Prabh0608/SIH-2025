import React from "react";
import "./Modal.scss";

const Modal = ({ onClose }) => (
    <div className="modal-overlay">
        <div className="modal-content">
            <button className="close-btn" onClick={onClose}>
                &times;
            </button>
            <h2>Create Your Profile</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="number" placeholder="Age" required />
                <input type="text" placeholder="College / Institute" required />
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="State" required />
                <input type="text" placeholder="Skills (comma separated)" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Contact Number" required />
                <div className="form-actions">
                    <button type="submit" className="save">
                        Save Profile
                    </button>
                    <button type="button" className="cancel" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
);

export default Modal;
