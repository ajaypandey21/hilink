import Image from "next/image";
import { title } from "process";

type Buttonprops = {
  label: string;
  type: "button" | "submit";
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ label, type, icon, variant, full }: Buttonprops) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {label}
      </label>
    </button>
  );
};

export default Button;
