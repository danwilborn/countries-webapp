export default function ValidateOp(x, y, op) {
    if(!x || !y)
        return "N/A";
    else if (op == "/")
        return x/y;
}