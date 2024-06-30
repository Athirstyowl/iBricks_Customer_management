import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import TableComp from './TableComp';
import CustomerForm from './CustomerForm';

const Main = () => {
    const customersList = [
        {
            id: "1",
            name: "John Deo",
            email: "john@exmple.com",
            phone: "123456",
            dob: "1986-08-09",
            address: "145-LDt, Sentilo Road, Redtry Streets, USA"
        },
        {
            id: "2",
            name: "John Doe",
            email: "john@doe.com",
            phone: "789012",
            dob: "1990-05-15",
            address: "789-ABC, Sample Street, Example City, USA"
        },
    ];

    const [customers, setCustomers] = useState(customersList);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleSave = (formData) => {
        if (formData.id) {
            setCustomers(customers.map(c => (c.id === formData.id ? formData : c)));
        } else {
            formData.id = new Date().getTime().toString();
            setCustomers([...customers, formData]);
        }
        setShowForm(false);
    };

    const handleDelete = (customerId) => {
        setCustomers(customers.filter(c => c.id !== customerId));
    };

    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
        setShowForm(true);
    };

    const handleAddCustomer = () => {
        setSelectedCustomer({
            id: '',
            name: '',
            email: '',
            phone: '',
            dob: '',
            address: ''
        });
        setShowForm(true);
    };

    return (
        <div className='h-100 d-flex flex-column'>
            <div className="navbar bg-body-tertiary border-bottom px-3" style={{ backgroundColor: "#e8fcfc" }}>
                <h5 className="fw-bold">Customer Management</h5>
                <div className="d-flex ms-auto" role="search">
                    <input
                        className="rounded-4 px-2 border border-2 border-dark-subtle"
                        type="search"
                        placeholder="Search Customers..."
                        aria-label="Search"
                    />
                    <Button onClick={handleAddCustomer} className="btn mx-2 rounded-4 border-0" style={{ backgroundColor: "#ff7373" }}>
                        Add Customers
                    </Button>
                </div>
            </div>
            <div className="flex-grow-1 p-4 bg-white">
                <TableComp customers={customers} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
            <CustomerForm
                show={showForm}
                handleClose={() => setShowForm(false)}
                handleSave={handleSave}
                customer={selectedCustomer}
            />
        </div>
    );
};

export default Main;
