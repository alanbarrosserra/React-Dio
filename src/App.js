const { useState, useEffect } = require("react");

const App = () => {
    const [usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(["Alan", "Carla", "Melanie"]);

    const handleAddUser = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario("");
    }

    useEffect(() => {
        setCount(usuarios.length);
    },[usuarios]);

    return (
        <div className="App">
            <h1>First DIO!</h1>
            <h3>Total: {count}</h3>
            <div>
                <input value={usuario} onChange={(event) => setUsuario(event.target.value)}/>
                <button onClick={handleAddUser}>Add User</button>
            </div>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
};
export default App;
