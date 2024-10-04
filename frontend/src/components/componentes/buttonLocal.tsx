interface AssociateMapProps {
  states: string[];
  onStateSelect: (state: string) => void;
}

// Componente AssociateMap
export function AssociateMap({ states, onStateSelect }: AssociateMapProps) {
  return (
    <div className="btnAssociateMapContainer">
      {states.map((state) => (
        <button
          key={state}
          className="btnAssociateMap"
          onClick={() => onStateSelect(state)}
        >
          {state}
        </button>
      ))}
    </div>
  );
}
