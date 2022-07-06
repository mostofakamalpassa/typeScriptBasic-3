"use strict";
function calculateAge(birthDate) {
    return birthDate;
}
let birthDate = "1990-01-19";
calculateAge(birthDate);
let person = { first: "Georage", last: "washington" };
const formatName = (p) => `${p.first}  ${p.last}`;
const formatNameAny = (p) => `${p.first}  ${p.last}`;
function renderSelector(props) {
    /* ... */
}
let selectedId = 0;
function handleSelectItem(item) {
    selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectItem });
