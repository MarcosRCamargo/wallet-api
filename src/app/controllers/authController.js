import authService from "../services/authService.js";

function signup(req, res) {
    const body = req.body;
    const resAuthService = authService.signup(body);
    res.send(resAuthService);
}
export default { signup};