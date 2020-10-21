module.exports = class APIResponse {
    constructor(errors, data = {}) {
        this.data = data;

        if (errors.length > 0) {
            this.success = false;

            return {
                success: false,
                errors,
                data,
            };
        }

        this.success = true;

        return {
            success: true,
            errors,
            data,
        };
    }
};
