import APIHelper from "../helpers/APIHelper";

const User = {
    Register: (username, email, password, repeatedPassword) => {
        const response = APIHelper.get("register", {
            username,
            email,
            password,
            repeatedPassword,
        });

        console.log(response);
    },
};

export default User;
