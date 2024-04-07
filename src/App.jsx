import react, { useState, useEffect } from "react";
import { setUser } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "./assets/components/Header";
import "./App.css";
import Email from "./assets/components/Email";

function App() {
  const [error, setError] = useState(null);
  const userData = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del usuario");
        }
        const userData = await response.json();
        dispatch(
          setUser({
            user: userData.name,
            userName: userData.username,
            email: userData.email,
          })
        );
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <p>Error al cargar los datos del usuario.</p>
      ) : userData ? (
        <div>
          <h1>Gestión de estados compuestos 2</h1>
          <hr />
          <Header user={userData.user} userName={userData.userName} />
          <Email />
        </div>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
}

export default App;
