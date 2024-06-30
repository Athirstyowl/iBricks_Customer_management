import React from 'react';
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";

const TableComp = ({ customers, onEdit, onDelete }) => {
    return (
        <div className="container p-lg-4 pb-lg-2 border rounded-2" style={{ fontSize: "12px" }}>
            <table className="table table-hover">
                <thead className='align-middle' style={{ height: '50px' }}>
                    <tr>
                        <td scope="col">Name</td>
                        <td scope="col">Email</td>
                        <td scope="col">Phone</td>
                        <td scope="col">Date of Birth</td>
                        <td scope="col">Address</td>
                        <td scope="col">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr
                            key={customer.id}
                            className={`align-middle ${index === customers.length - 1 ? 'no-border' : ''}`}
                            style={{ height: '50px' }}
                        >
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.dob}</td>
                            <td>{customer.address}</td>
                            <td>
                                <span
                                    className="border rounded-3 me-2 px-2"
                                    style={{ paddingTop: "6px", paddingBottom: "8px", backgroundColor: "#e8fcfc" }}
                                    onClick={() => onEdit(customer)}
                                >
                                    <GoPencil size={15} />
                                </span>
                                <span
                                    className="border rounded-3 px-2"
                                    style={{ paddingTop: "6px", paddingBottom: "8px", backgroundColor: "#e8fcfc" }}
                                    onClick={() => onDelete(customer.id)}
                                >
                                    <RiDeleteBin6Line size={15} />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx>{`
                .no-border td {
                    border-bottom: none !important;
                }
            `}</style>
        </div>
    );
};

export default TableComp;
