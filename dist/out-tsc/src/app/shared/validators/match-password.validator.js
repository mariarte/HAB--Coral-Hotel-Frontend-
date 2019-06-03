export function MatchPasswordValidator(group) {
    var password = group.get("password").value;
    var confirmPassword = group.get("confirmPassword").value;
    if (password !== confirmPassword) {
        return { passwordMismatch: true };
    }
    return null;
}
//# sourceMappingURL=match-password.validator.js.map