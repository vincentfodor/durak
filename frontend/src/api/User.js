import APIHelper from "../helpers/APIHelper";

const User = {
    Register: (username, email, password, repeatedPassword) => {
        return APIHelper.post("register", {
            username,
            email,
            password,
            repeatedPassword,
        })
            .then((res) => res)
            .catch((err) => err);
    },
    Login: (username, password) => {
        return APIHelper.post("login", {
            username,
            password,
        })
            .then((res) => res)
            .catch((err) => err);
    },
};

export default User;
