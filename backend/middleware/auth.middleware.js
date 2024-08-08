import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";

const verifyUser = async (req, _, next) => {
  try {
    const token = req.cookie?.accessToken;
    if (!token) {
      throw new ApiError(401, "Unauthorised request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select("-password");
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    res
      .status(500)
      .json(
        new ApiError(500, "error occured in verifyUser function in middlewares")
      );
  }
};

export { verifyUser };
