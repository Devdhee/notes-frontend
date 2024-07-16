import JotterCard from "./NotePreviewcard";

const notes = [
  {
    title: "Meeting Notes",
    description: "Notes from the meeting with the team on project updates.",
  },
  {
    title: "Shopping List",
    description: "Milk, Bread, Eggs, Butter, Cheese, Vegetables.",
  },
  {
    title: "Workout Plan",
    description: "Monday: Cardio, Tuesday: Strength Training, Wednesday: Yoga.",
  },
];

const Tets = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {notes.map((note, index) => (
        <JotterCard
          key={index}
          title={note.title}
          description={note.description}
        />
      ))}
    </div>
  );
};

export default Tets;
