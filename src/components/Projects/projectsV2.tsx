import PcardRight from "./Card/Pcard";
import PcardLeft from "./Card/Pcard2";

export default function ProjectsCardsV2() {
  const coreDelk = "/coreDelk.png";
  const mediHelp = "/mediHelp.png";
  const fitG = "/fitG.png";

  return (
    <div className="grid grid-rows-5 grid-flow-col gap-4 justify-items-center space-y-5">
      <div>
        <PcardRight
          title="COREDELK web"
          description="UI/UX Design, Development"
          imageUrl={coreDelk}
        />
      </div>
      <div>
        <PcardLeft
          title="Fitgenius web"
          description="UI/UX Design, Development"
          imageUrl={fitG}
        />
      </div>
      <div>
        <PcardLeft
          title="MediHelp Dashboard"
          description="UI/UX Design, Development"
          imageUrl={mediHelp}
        />
      </div>
    </div>
  );
}
