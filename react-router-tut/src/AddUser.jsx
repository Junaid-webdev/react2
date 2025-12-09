import { useState } from "react";

function UserAdd() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const createUser = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, age, email }),
        });

        response = await response.json();
        if (response) {
            alert("New User Added");
            setName("");
            setAge("");
            setEmail("");
        }
    };

    return (
        <>
            <div
                style={{
                    width: "400px",
                    margin: "40px auto",
                    padding: "25px",
                    borderRadius: "10px",
                    background: "#fafafa",
                    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
                    textAlign: "center",
                }}
            >
                <h2 style={{ marginBottom: "25px" }}>Add New User</h2>

                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter Your Name"
                    style={{
                        width: "90%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        marginBottom: "15px",
                    }}
                />

                <input
                    type="number"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    placeholder="Enter Your Age"
                    style={{
                        width: "90%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        marginBottom: "15px",
                    }}
                />

                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter Your Email"
                    style={{
                        width: "90%",
                        padding: "10px",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        marginBottom: "20px",
                    }}
                />

                <button
                    onClick={createUser}
                    style={{
                        width: "95%",
                        padding: "12px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        fontSize: "18px",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    Add User
                </button>
            </div>
        </>
    );
}

export default UserAdd;
