function showHint(n) {
    document.getElementById(`HintButton${n}`).remove();
    document.getElementById(`Hint${n}`).style.display = "block";
}
