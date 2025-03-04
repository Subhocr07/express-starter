import ApiError from "../utils/apiError";
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (error) {
        next(new ApiError(400, "Validation error", error.errors));
    }
};
export default validate;
