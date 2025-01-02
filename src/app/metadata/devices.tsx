import { Device } from "~/components/devices/device";
import { TitleScreen } from "~/components/devices/titleScreen";
import { InfoScreen } from "~/components/devices/infoScreen";
import { type Erc7730 } from "~/store/types";

interface Props {
  metadata?: Erc7730["metadata"];
  address: string | null;
}

const Devices = ({ metadata, address }: Props) => {
  return (
    <>
      <Device.Frame>
        <TitleScreen
          functionName={"{functionName}"}
          type={"transaction"}
          owner={metadata?.owner ?? ""}
        />
        <Device.Pagination current={1} total={1} />
      </Device.Frame>
      <Device.Frame>
        <InfoScreen info={metadata?.info} address={address ?? ""} />
      </Device.Frame>
    </>
  );
};

export default Devices;
