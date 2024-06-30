import React, { useState, useEffect } from 'react';

const CustomerForm = ({ show, handleClose, handleSave, customer }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        dob: '',
        address: ''
    });

    useEffect(() => {
        if (customer) {
            setFormData(customer); // Populate form data if editing existing customer
        } else {
            setFormData({ // Clear form data if adding new customer
                id: '',
                name: '',
                email: '',
                phone: '',
                dob: '',
                address: ''
            });
        }
    }, [customer]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        handleSave(formData); // Save/update customer data
        handleClose(); // Close the form
    };

    if (!show) {
        return null; // If show is false, don't render the form
    }

    return (
        <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0 position-relative">
                        <button type="button" className="btn-close position-absolute top-0 end-0 m-1" style={{ fontSize: "10px" }} aria-label="Close" onClick={handleClose}></button>
                        <div>
                            <h5 className="modal-title fs-6 fw-bold">
                                {customer && customer.id ? 'Edit Customer' : 'Add Customer'}
                            </h5>
                            <p className="text-muted fs-7 mb-3">Enter details of the customer:</p>
                        </div>
                    </div>
                    <div className="modal-body py-0">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="form-label fs-7">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control form-control-sm rounded-3 border-2 border-dark-subtle"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="email" className="form-label fs-7">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control form-control-sm rounded-3 border-2 border-dark-subtle"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="phone" className="form-label fs-7">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="form-control form-control-sm rounded-3 border-2 border-dark-subtle"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="dob" className="form-label fs-7">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        className="form-control form-control-sm rounded-3 border-2 border-dark-subtle"
                                        value={formData.dob}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="address" className="form-label fs-7">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="form-control form-control-sm rounded-3 border-2 border-dark-subtle"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-light rounded-3 border-1 border-dark" onClick={handleClose}>Cancel</button>
                        <button type="button" className="btn mx-2 rounded-3 border-0" style={{ backgroundColor: "#ff7373" }} onClick={handleSubmit}>
                            {customer && customer.id ? "Edit" : "Add"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerForm;
