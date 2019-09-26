export default function Validate(name, code) {
    
    var regex = new RegExp('[a-zA-Z]{2,3}|^$');
    if (regex.exec(name) && regex.exec(code)) {
        return true;
    } else {
        return false;
    }

}