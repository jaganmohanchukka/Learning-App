import react,{createContext,useContext,useEffect,useState} from "react";
const authContext = createContext();
export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const restoreUser = async ()=>{
            const token = localStorage.getItem("accessToken");
            if(!token){
                setLoading(false);
                return;
            }
            try{
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/user`,{
                    headers : {
                        Authorization: `Bearer ${token}` 
                    }
                });
                if(!response.ok){
                    localStorage.removeItem("accessToken");
                    setUser(null);
                    return;
                }
                const data = await response.json();
                setUser(data.user);
            }catch(err){
                console.log(err);
                setUser(null);
            }finally{
                setLoading(false);
            }
        }
    restoreUser();

    },[])

    const login = (userData,token)=>{
        localStorage.setItem("accessToken",token);
        setUser(userData);
    }

    const logout = ()=>{
        localStorage.removeItem("accessToken");
        setUser(null);
    }
    return(
        <authContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                setUser
            }}
        >{children}</authContext.Provider>
    );
}

export const useAuth =()=>{
    return useContext(authContext);
}