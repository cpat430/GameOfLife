export const GridSize = ({
  setGridSize,
}: {
  setGridSize: (gridSize: number) => void;
}) => {
  const handleChange = (event: any) => {
    if (!event.target.value) return;
    if (event.target.value > 30) {
      event.target.value = 30;
    }

    setGridSize(event.target.value);
  };

  return (
    <div>
      <label style={{ whiteSpace: "nowrap" }}>Grid Size: </label>
      <input type="number" min="5" max="30" onChange={handleChange}></input>
    </div>
  );
};
