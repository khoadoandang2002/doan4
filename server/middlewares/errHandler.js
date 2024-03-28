// handle dùng để kiếm tra lỗi trả giá trị ngắn gọn dễ hiểu
const notFound = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found!`);
    res.status(404);
    next(error);
};

const errHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    return res.status(statusCode).json({
        success: false,
        mes: error.message // Sửa lại thành error.message
    });
};

module.exports = {
    notFound,
    errHandler
};
