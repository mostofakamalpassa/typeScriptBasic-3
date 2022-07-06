function calculateAge(birthDate: Date): Date {
  return birthDate;
}
let birthDate: any = "1990-01-19";
calculateAge(birthDate);

let person = { first: "Georage", last: "washington" };

interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first}  ${p.last}`;

const formatNameAny = (p: Person) => `${p.first}  ${p.last}`;

interface ComponentProps {
  onSelectItem: (item: any) => void;
}
function renderSelector(props: ComponentProps) {
  /* ... */
}
let selectedId: number = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}

renderSelector({onSelectItem: handleSelectItem});
