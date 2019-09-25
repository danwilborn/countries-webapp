export default function validate(name, code) {
    
    var regex = new RegExp('[a-zA-Z]*');
    if (regex.exec(name) && code.length < 4 && regex.exec(code)) {
        return true;
    } else {
        return false;
    }

}