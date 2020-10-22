import APIHelper from "../helpers/APIHelper";

const User = {
    Register: (username, email, password, repeatedPassword) => {
        return APIHelper.post("register", {
            username,
            email,
            password,
            repeatedPassword,
        });
    },
    Login: (username, password) => {
        return APIHelper.post("login", {
            username,
            password,
        });
    },
    Auth: (token) => {
        return APIHelper.post(
            "auth",
            {
                token,
            },
            { "Authorization": token }
        );
    },
};

export default User;
