function showHint(n) {
    const hintButton = document.getElementById(`HintButton${n}`);
    const hint = document.getElementById(`Hint${n}`);

    if (hintButton && hint) {
        hintButton.style.display = "none";
        hint.style.display = "block";
    }
}
