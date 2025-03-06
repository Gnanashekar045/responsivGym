import React from "react";

const Tabledata = () => {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", age: 28, city: "New York" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", age: 24, city: "Los Angeles" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", age: 30, city: "Chicago" },
        { id: 4, name: "Robert Brown", email: "robert@example.com", age: 35, city: "Houston" },
        { id: 5, name: "Michael Davis", email: "michael@example.com", age: 40, city: "San Francisco" },
        { id: 6, name: "Emma Wilson", email: "emma@example.com", age: 27, city: "Seattle" },
        { id: 7, name: "Olivia Martinez", email: "olivia@example.com", age: 22, city: "Denver" },
        { id: 8, name: "William Taylor", email: "william@example.com", age: 33, city: "Boston" },
        { id: 9, name: "Sophia Anderson", email: "sophia@example.com", age: 29, city: "Atlanta" },
        { id: 10, name: "James Thomas", email: "james@example.com", age: 31, city: "Miami" },
        { id: 11, name: "Liam White", email: "liam@example.com", age: 26, city: "Dallas" },
        { id: 12, name: "Mia Harris", email: "mia@example.com", age: 34, city: "Austin" },
        { id: 13, name: "Benjamin Martin", email: "benjamin@example.com", age: 37, city: "Phoenix" },
        { id: 14, name: "Charlotte Lee", email: "charlotte@example.com", age: 25, city: "Philadelphia" },
        { id: 15, name: "Ethan Young", email: "ethan@example.com", age: 32, city: "San Diego" },
        { id: 16, name: "Amelia King", email: "amelia@example.com", age: 23, city: "Portland" },
        { id: 17, name: "Lucas Walker", email: "lucas@example.com", age: 38, city: "Las Vegas" },
        { id: 18, name: "Harper Allen", email: "harper@example.com", age: 29, city: "Nashville" },
        { id: 19, name: "Henry Scott", email: "henry@example.com", age: 36, city: "Minneapolis" },
        { id: 20, name: "Ava Adams", email: "ava@example.com", age: 21, city: "Orlando" },
    ]

    return (
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>age</th>
                <th>city</th>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabledata;